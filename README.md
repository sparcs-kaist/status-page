# status-page

git repo => S3 [status.sparcs.org](https://s3.console.aws.amazon.com/s3/buckets/status.sparcs.org/?region=ap-northeast-2&tab=overview) => [cloudfront](https://console.aws.amazon.com/cloudfront/home?region=ap-northeast-2#distribution-settings:E2S5ARYH80LXX5) => Route 53 으로 배포되어있음. \
\
[Master branch](https://github.com/sparcs-kaist/status-page)가 [AWS CodePipeline](https://ap-northeast-2.console.aws.amazon.com/codesuite/codepipeline/pipelines/sparcs-maintenance-s3-deploy/view?region=ap-northeast-2)으로 자동 배포 설정되어있음.
