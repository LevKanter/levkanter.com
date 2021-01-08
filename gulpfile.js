const gulp = require("gulp");
const env = require("gulp-env");
const awspublish = require("gulp-awspublish");
const parallelize = require("concurrent-transform");
const cloudfront = require("gulp-cloudfront-invalidate-aws-publish");

gulp.task("deploy", () => {
  env({ file: ".deploy.json" });

  const region = process.env.AWS_DEFAULT_REGION;
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
  const Bucket = process.env.AWS_BUCKET_NAME;
  const distribution = process.env.AWS_CLOUDFRONT;

  const publisher = awspublish.create(
    {
      accessKeyId,
      secretAccessKey,
      region,
      params: { Bucket },
    },
    {
      cacheFileName: ".awspublish",
    }
  );

  return gulp
    .src("./public/**")
    .pipe(parallelize(publisher.publish(), 10))
    .pipe(
      cloudfront({
        accessKeyId,
        secretAccessKey,
        distribution,
        indexRootPath: true,
        wait: true,
      })
    )
    .pipe(publisher.sync())
    .pipe(publisher.cache())
    .pipe(awspublish.reporter());
});
