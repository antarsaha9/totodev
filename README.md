# totodev
totodev

## Dev mode
Run 'yarn install'  
Run 'yarn dev'  
**It seems due to this [bug report](https://github.com/vercel/next.js/issues/10061), occassionally a page doesn't render correctly, you need to reload again/**

## Prodcution mode  
Run 'yarn build'  
Run 'yarn start'  


## Deployment instruction to AWS
- Install all the required packages(`npm install`)
- Make sure AWS account credentials are set to profile with a name
- Point the AWS account credentials profile name in `.env` file
- Run `npx sls` or `npx sls --debug`


## Notes
- To change/set custom domain name, first create the entry in Route53, create a SSL certificate in ACM for both root domain(if not dome preciously) and sub domain in us-east-1 region, then write the subomain in serverless.yml file and deploy
- `npx sls` and `serverless` both commands are same, any one can be used.
