<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

A repository for using AWS S3 file upload with NestJS.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

App will be running [on port 5000](http://localhost:5000/)

## File upload in NestSJ

To handle file uploading, Nest provides a built-in module based on the multer middleware package for Express.

Multer handles data posted in the **multipart/form-data** format, which is primarily used for uploading files via an **HTTP POST request**.

This module is fully configurable and you can adjust its behavior to your application requirements.

## Using Postman

We only have a one single **POST** route in this demo, which is **/aws**.

![Using Postman](/assets/postmanaws.png)

To access the file path on AWS, we only need to get the location from the response body.

## Links

- [File upload in NestJS](https://docs.nestjs.com/techniques/file-upload)

- [ACL in AWS S3 buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions)

- [Tutorial](https://wanago.io/2020/08/03/api-nestjs-uploading-public-files-to-amazon-s3/)
