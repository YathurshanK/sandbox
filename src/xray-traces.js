// const parentSegment = {
//   trace_id: "1-6205e42f-0441cde11cd97e98a8cf066c",
//   id: "6aa564e49b4a7f3b",
//   start_time: 1644553263.071,
//   name: "raw-crawler-xray-dev",
//   service: {
//     runtime: "node",
//     runtime_version: "v14.19.0",
//     version: "unknown",
//     name: "unknown"
//   },
//   aws: {
//     ecs: {
//       container: "ip-10-9-22-86.ap-southeast-2.compute.internal"
//     },
//     xray: {
//       sdk: "X-Ray for Node.js",
//       sdk_version: "3.3.4",
//       package: "aws-xray-sdk"
//     }
//   },
//   origin: "AWS::ECS::Container",
//   user: "0619b6f0-8af2-11ec-8fbc-affc504b0905",
//   annotations: {
//     emailUuid: "0619b6f0-8af2-11ec-8fbc-affc504b0905",
//     fromEmail: "Li Staff Dev <listaffdev@gmail.com>",
//     subject: "Stream Test"
//   },
//   metadata: {
//     default: {
//       emailReceivedTime: "2022-02-11T04:19:47.000Z",
//       noOfAttachments: 0
//     }
//   },
//   subsegments: [
//     {
//       id: "9eb79d33a5e7013b",
//       name: "s3",
//       start_time: 1644553263.076,
//       namespace: "aws",
//       aws: {
//         operation: "PutObject",
//         region: "ap-southeast-2",
//         request_id: "47SEJQKPSR8XE8CW",
//         retries: 0,
//         id_2:
//           "8c6D367N7AruRVb6JmJ81NaP7XGj1274G4cqgZIj1FU/Rt6HqZyVwX5JjhQbm0veH2+h8QUq9wg=",
//         key: "11-02-2022/0619b6f0-8af2-11ec-8fbc-affc504b0905/email.html",
//         bucket_name: "raw-email-attachment-dev"
//       },
//       http: {
//         response: {
//           status: 200,
//           content_length: "0"
//         }
//       },
//       end_time: 1644553263.142
//     },
//     {
//       id: "58fa7b7af6fbcae5",
//       name: "s3",
//       start_time: 1644553263.265,
//       namespace: "aws",
//       aws: {
//         operation: "PutObject",
//         region: "ap-southeast-2",
//         request_id: "47SFGBAVP46YA9AV",
//         retries: 0,
//         id_2:
//           "6vj3U/9/efmevcloifu5pR5zH+DJTqYSiTtVYKG5ueJtkRWWWVdVccMzy2lIu2pAOsKwsYzwcLk=",
//         key: "11-02-2022/0619b6f0-8af2-11ec-8fbc-affc504b0905/email.pdf",
//         bucket_name: "raw-email-attachment-dev"
//       },
//       http: {
//         response: {
//           status: 200,
//           content_length: "0"
//         }
//       },
//       end_time: 1644553263.333
//     },
//     {
//       id: "5826734207082aa7",
//       name: "dynamodb",
//       start_time: 1644553263.336,
//       namespace: "aws",
//       aws: {
//         operation: "PutItem",
//         region: "ap-southeast-2",
//         request_id: "DL7QM8IOS4K1PCPRU6LC2NRVUFVV4KQNSO5AEMVJF66Q9ASUAAJG",
//         retries: 0,
//         table_name: "raw-email-staging-dev"
//       },
//       http: {
//         response: {
//           status: 200,
//           content_length: "2"
//         }
//       },
//       end_time: 1644553263.381
//     }
//   ],
//   end_time: 1644553263.948
// };

// console.log(parentSegment);

// const newSubSegment =
//   '{"id":"20312a0e2b8809f4","name":"DynamoDB","trace_id":"1-6204e90a-d67e5c3571f32ac9f05059a7","start_time":1.479706157195E9,"end_time":1.479706157202E9,"parent_id":"79736b962fe3239e","http":{"response":{"content_length":60,"status":200}},"inferred":true,"aws":{"consistent_read":false,"table_name":"scorekeep-session-xray","operation":"GetItem","request_id":"SCAU23OM6M8FO38UASGC7785ARVV4KQNSO5AEMVJF66Q9ASUAAJG","resource_names":["scorekeep-session-xray"]},"origin":"AWS::DynamoDB::Table"}';

// console.log(JSON.parse(newSubSegment));

// const seg={
//   "Id": "1-620a462d-e08fb09e76300ab1fdc3e517",
//   "Duration": 3.787,
//   "LimitExceeded": false,
//   "Segments": [
//       {
//           "Id": "5ab051438bad72dc",
//           "Document": {
//               "id": "5ab051438bad72dc",
//               "name": "raw-crawler-xray-dev",
//               "start_time": 1644840492.684,
//               "trace_id": "1-620a462d-e08fb09e76300ab1fdc3e517",
//               "end_time": 1644840493.802,
//               "aws": {
//                   "ecs": {
//                       "container": "ip-10-9-21-124.ap-southeast-2.compute.internal"
//                   },
//                   "xray": {
//                       "package": "aws-xray-sdk",
//                       "sdk_version": "3.3.4",
//                       "sdk": "X-Ray for Node.js"
//                   }
//               },
//               "annotations": {
//                   "emailUuid": "c84a55b0-8d8e-11ec-b73f-2902d103217a",
//                   "subject": "Re: Re: Re: Re: Re: Mail Testing",
//                   "fromEmail": "Li Staff Dev <listaffdev@gmail.com>"
//               },
//               "metadata": {
//                   "default": {
//                       "emailReceivedTime": "2022-02-14T12:06:18.000Z",
//                       "noOfAttachments": 0
//                   }
//               },
//               "service": {
//                   "name": "unknown",
//                   "version": "unknown",
//                   "runtime": "node",
//                   "runtime_version": "v14.19.0"
//               },
//               "user": "c84a55b0-8d8e-11ec-b73f-2902d103217a",
//               "origin": "AWS::ECS::Container",
//               "subsegments": [
//                   {
//                       "id": "0eb71995a6eec874",
//                       "name": "S3",
//                       "start_time": 1644840492.689,
//                       "end_time": 1644840492.794,
//                       "http": {
//                           "response": {
//                               "status": 200
//                           }
//                       },
//                       "aws": {
//                           "retries": 0,
//                           "bucket_name": "raw-email-attachment-dev",
//                           "region": "ap-southeast-2",
//                           "operation": "PutObject",
//                           "request_id": "7APM3EY1HT1KQXYM",
//                           "key": "14-02-2022/c84a55b0-8d8e-11ec-b73f-2902d103217a/email.html",
//                           "id_2": "9U6wnu7iNNpIb9iVN0dTHM3eRRqqGt4as9CRzEAS3+wBLwMH2woLJLbMg9A9QEzncFj43qV2Fks=",
//                           "resource_names": [
//                               "raw-email-attachment-dev"
//                           ]
//                       },
//                       "namespace": "aws"
//                   },
//                   {
//                       "id": "f64e9697c9144a41",
//                       "name": "S3",
//                       "start_time": 1644840492.937,
//                       "end_time": 1644840493.115,
//                       "http": {
//                           "response": {
//                               "status": 200
//                           }
//                       },
//                       "aws": {
//                           "retries": 0,
//                           "bucket_name": "raw-email-attachment-dev",
//                           "region": "ap-southeast-2",
//                           "operation": "PutObject",
//                           "request_id": "7APQDB31HC681GM2",
//                           "key": "14-02-2022/c84a55b0-8d8e-11ec-b73f-2902d103217a/email.pdf",
//                           "id_2": "6GFXgOfKpXtEXBH+Um1ZZkMLzZuxCno1SZBoBcByX1kB4xuxmgIOLpR0+pczHhbUuvhD+DTL3kg=",
//                           "resource_names": [
//                               "raw-email-attachment-dev"
//                           ]
//                       },
//                       "namespace": "aws"
//                   },
//                   {
//                       "id": "afdd97b358456aa0",
//                       "name": "DynamoDB",
//                       "start_time": 1644840493.118,
//                       "end_time": 1644840493.163,
//                       "http": {
//                           "response": {
//                               "status": 200
//                           }
//                       },
//                       "aws": {
//                           "retries": 0,
//                           "region": "ap-southeast-2",
//                           "operation": "PutItem",
//                           "request_id": "587BOFO48JI2UG1KD79CQ050KVVV4KQNSO5AEMVJF66Q9ASUAAJG",
//                           "table_name": "raw-email-staging-dev",
//                           "resource_names": [
//                               "raw-email-staging-dev"
//                           ]
//                       },
//                       "namespace": "aws"
//                   }
//               ]
//           }
//       },
//       {
//           "Id": "9ec29b997854235e",
//           "Document": {
//               "id": "9ec29b997854235e",
//               "name": "Auto replier xray",
//               "start_time": 1644840495.984,
//               "trace_id": "1-620a462d-e08fb09e76300ab1fdc3e517",
//               "end_time": 1644840496.471,
//               "parent_id": "afdd97b358456aa0",
//               "aws": {
//                   "xray": {
//                       "package": "aws-xray-sdk",
//                       "sdk_version": "3.3.4",
//                       "sdk": "X-Ray for Node.js"
//                   }
//               },
//               "metadata": {
//                   "default": {
//                       "Replay eligibility": false,
//                       "Email sent to": "Li Staff Dev <listaffdev@gmail.com>",
//                       "Email Sent": true
//                   }
//               },
//               "service": {
//                   "name": "unknown",
//                   "version": "unknown",
//                   "runtime": "node",
//                   "runtime_version": "v14.18.1"
//               },
//               "subsegments": [
//                   {
//                       "id": "eed3c61ffccd3520",
//                       "name": "SNS",
//                       "start_time": 1644840496.045,
//                       "end_time": 1644840496.344,
//                       "http": {
//                           "response": {
//                               "status": 200
//                           }
//                       },
//                       "aws": {
//                           "retries": 0,
//                           "topic_arn": "arn:aws:sns:ap-southeast-2:124283145826:email-comms-event-dev",
//                           "region": "ap-southeast-2",
//                           "operation": "Publish",
//                           "request_id": "3f5d94ad-801c-5e48-835b-ce29c86c8b09",
//                           "resource_names": [
//                               "arn:aws:sns:ap-southeast-2:124283145826:email-comms-event-dev"
//                           ]
//                       },
//                       "namespace": "aws"
//                   }
//               ]
//           }
//       },
//       {
//           "Id": "10ae29cd13255ae6",
//           "Document": {
//               "id": "10ae29cd13255ae6",
//               "name": "S3",
//               "start_time": 1644840492.937,
//               "trace_id": "1-620a462d-e08fb09e76300ab1fdc3e517",
//               "end_time": 1644840493.115,
//               "parent_id": "f64e9697c9144a41",
//               "inferred": true,
//               "http": {
//                   "response": {
//                       "status": 200
//                   }
//               },
//               "aws": {
//                   "retries": 0,
//                   "bucket_name": "raw-email-attachment-dev",
//                   "region": "ap-southeast-2",
//                   "operation": "PutObject",
//                   "request_id": "7APQDB31HC681GM2",
//                   "key": "14-02-2022/c84a55b0-8d8e-11ec-b73f-2902d103217a/email.pdf",
//                   "id_2": "6GFXgOfKpXtEXBH+Um1ZZkMLzZuxCno1SZBoBcByX1kB4xuxmgIOLpR0+pczHhbUuvhD+DTL3kg=",
//                   "resource_names": [
//                       "raw-email-attachment-dev"
//                   ]
//               },
//               "origin": "AWS::S3::Bucket"
//           }
//       },
//       {
//           "Id": "36742be806e6add2",
//           "Document": {
//               "id": "36742be806e6add2",
//               "name": "S3",
//               "start_time": 1644840492.689,
//               "trace_id": "1-620a462d-e08fb09e76300ab1fdc3e517",
//               "end_time": 1644840492.794,
//               "parent_id": "0eb71995a6eec874",
//               "inferred": true,
//               "http": {
//                   "response": {
//                       "status": 200
//                   }
//               },
//               "aws": {
//                   "retries": 0,
//                   "bucket_name": "raw-email-attachment-dev",
//                   "region": "ap-southeast-2",
//                   "operation": "PutObject",
//                   "request_id": "7APM3EY1HT1KQXYM",
//                   "key": "14-02-2022/c84a55b0-8d8e-11ec-b73f-2902d103217a/email.html",
//                   "id_2": "9U6wnu7iNNpIb9iVN0dTHM3eRRqqGt4as9CRzEAS3+wBLwMH2woLJLbMg9A9QEzncFj43qV2Fks=",
//                   "resource_names": [
//                       "raw-email-attachment-dev"
//                   ]
//               },
//               "origin": "AWS::S3::Bucket"
//           }
//       },
//       {
//           "Id": "39e31955388c9a2e",
//           "Document": {
//               "id": "39e31955388c9a2e",
//               "name": "SNS",
//               "start_time": 1644840496.045,
//               "trace_id": "1-620a462d-e08fb09e76300ab1fdc3e517",
//               "end_time": 1644840496.344,
//               "parent_id": "eed3c61ffccd3520",
//               "inferred": true,
//               "http": {
//                   "response": {
//                       "status": 200
//                   }
//               },
//               "aws": {
//                   "retries": 0,
//                   "topic_arn": "arn:aws:sns:ap-southeast-2:124283145826:email-comms-event-dev",
//                   "region": "ap-southeast-2",
//                   "operation": "Publish",
//                   "request_id": "3f5d94ad-801c-5e48-835b-ce29c86c8b09",
//                   "resource_names": [
//                       "arn:aws:sns:ap-southeast-2:124283145826:email-comms-event-dev"
//                   ]
//               },
//               "origin": "AWS::SNS"
//           }
//       }
//   ]
// }

// console.log(seg)

const udp =
  '{"message":"UDP message sent: {\\"trace_id\\":\\"1-623c7a76-71d571867712dad1d0c53f58\\",\\"id\\":\\"1234567891220221\\",\\"start_time\\":1648148262.573,\\"name\\":\\"email-tagging-and-fowarding-worker-step-dev\\",\\"parent_id\\":\\"1234567891211212\\",\\"service\\":{\\"runtime\\":\\"node\\",\\"runtime_version\\":\\"v16.13.2\\",\\"version\\":\\"unknown\\",\\"name\\":\\"unknown\\"},\\"aws\\":{\\"xray\\":{\\"sdk\\":\\"X-Ray for Node.js\\",\\"sdk_version\\":\\"3.3.4\\",\\"package\\":\\"aws-xray-sdk\\"}},\\"subsegments\\":[{\\"id\\":\\"87b7f50bf0399159\\",\\"name\\":\\"dynamodb.ap-southeast-2.amazonaws.com\\",\\"start_time\\":1648148263.922,\\"namespace\\":\\"remote\\",\\"http\\":{\\"request\\":{\\"url\\":\\"https://dynamodb.ap-southeast-2.amazonaws.com/\\",\\"method\\":\\"POST\\"},\\"response\\":{\\"status\\":200,\\"content_length\\":188}},\\"end_time\\":1648148264.504},{\\"id\\":\\"93443814e8563ec0\\",\\"name\\":\\"secretsmanager.ap-southeast-2.amazonaws.com\\",\\"start_time\\":1648148264.507,\\"namespace\\":\\"remote\\",\\"http\\":{\\"request\\":{\\"url\\":\\"https://secretsmanager.ap-southeast-2.amazonaws.com/\\",\\"method\\":\\"POST\\"},\\"response\\":{\\"status\\":200,\\"content_length\\":1100}},\\"end_time\\":1648148265.423},{\\"id\\":\\"7ac3e48769220a73\\",\\"name\\":\\"oauth2.googleapis.com\\",\\"start_time\\":1648148265.428,\\"namespace\\":\\"remote\\",\\"http\\":{\\"request\\":{\\"url\\":\\"https://oauth2.googleapis.com/token\\",\\"method\\":\\"POST\\"},\\"response\\":{\\"status\\":200}},\\"end_time\\":1648148265.932},{\\"id\\":\\"d1f2a4ab534a3c80\\",\\"name\\":\\"gmail.googleapis.com\\",\\"start_time\\":1648148265.941,\\"namespace\\":\\"remote\\",\\"http\\":{\\"request\\":{\\"url\\":\\"https://gmail.googleapis.com/gmail/v1/users/projraw@leapin.com.au/threads/17fbc3d6c7ce4839/modify\\",\\"method\\":\\"POST\\"},\\"response\\":{\\"status\\":200}},\\"end_time\\":1648148267.145}],\\"end_time\\":1648148267.151}"}';
const getCMD = (udp) => {
  const parsedUDP = JSON.parse(udp);

  const udpString = JSON.stringify(parsedUDP.message);
  let q = '"';
  const cmd = "aws xray put-trace-segments --trace-segment-documents ";
  const trace = q + udpString.substring(19);
  const udpCmd = cmd + trace;
  console.log(JSON.parse(trace));
  console.log(udpCmd);
};

const str =
  '{"message":"UDP message sent: {\\"trace_id\\":\\"1-623c7a76-71d571867712dad1d0c53f58\\",\\"id\\":\\"1234567891220221\\",\\"start_time\\":1648148262.573,\\"name\\":\\"email-tagging-and-fowarding-worker-step-dev\\",\\"parent_id\\":\\"1234567891211212\\",\\"service\\":{\\"runtime\\":\\"node\\",\\"runtime_version\\":\\"v16.13.2\\",\\"version\\":\\"unknown\\",\\"name\\":\\"unknown\\"},\\"aws\\":{\\"xray\\":{\\"sdk\\":\\"X-Ray for Node.js\\",\\"sdk_version\\":\\"3.3.4\\",\\"package\\":\\"aws-xray-sdk\\"}},\\"subsegments\\":[{\\"id\\":\\"87b7f50bf0399159\\",\\"name\\":\\"dynamodb.ap-southeast-2.amazonaws.com\\",\\"start_time\\":1648148263.922,\\"namespace\\":\\"remote\\",\\"http\\":{\\"request\\":{\\"url\\":\\"https://dynamodb.ap-southeast-2.amazonaws.com/\\",\\"method\\":\\"POST\\"},\\"response\\":{\\"status\\":200,\\"content_length\\":188}},\\"end_time\\":1648148264.504},{\\"id\\":\\"93443814e8563ec0\\",\\"name\\":\\"secretsmanager.ap-southeast-2.amazonaws.com\\",\\"start_time\\":1648148264.507,\\"namespace\\":\\"remote\\",\\"http\\":{\\"request\\":{\\"url\\":\\"https://secretsmanager.ap-southeast-2.amazonaws.com/\\",\\"method\\":\\"POST\\"},\\"response\\":{\\"status\\":200,\\"content_length\\":1100}},\\"end_time\\":1648148265.423},{\\"id\\":\\"7ac3e48769220a73\\",\\"name\\":\\"oauth2.googleapis.com\\",\\"start_time\\":1648148265.428,\\"namespace\\":\\"remote\\",\\"http\\":{\\"request\\":{\\"url\\":\\"https://oauth2.googleapis.com/token\\",\\"method\\":\\"POST\\"},\\"response\\":{\\"status\\":200}},\\"end_time\\":1648148265.932},{\\"id\\":\\"d1f2a4ab534a3c80\\",\\"name\\":\\"gmail.googleapis.com\\",\\"start_time\\":1648148265.941,\\"namespace\\":\\"remote\\",\\"http\\":{\\"request\\":{\\"url\\":\\"https://gmail.googleapis.com/gmail/v1/users/projraw@leapin.com.au/threads/17fbc3d6c7ce4839/modify\\",\\"method\\":\\"POST\\"},\\"response\\":{\\"status\\":200}},\\"end_time\\":1648148267.145}],\\"end_time\\":1648148267.151}"}';
getCMD(str);
// getCMD(
//   '{"message":"UDP message sent: {\\"trace_id\\":\\"1-620b79b7-ddce7ad676d9eb605e93795c\\",\\"id\\":\\"e8760610e869f5fa\\",\\"start_time\\":1644919222.813,\\"name\\":\\"raw-crawler-xray-dev\\",\\"service\\":{\\"runtime\\":\\"node\\",\\"runtime_version\\":\\"v16.13.2\\",\\"version\\":\\"unknown\\",\\"name\\":\\"unknown\\"},\\"aws\\":{\\"ecs\\":{\\"container\\":\\"SL-YKalanantharasan\\"},\\"xray\\":{\\"sdk\\":\\"X-Ray for Node.js\\",\\"sdk_version\\":\\"3.3.4\\",\\"package\\":\\"aws-xray-sdk\\"}},\\"origin\\":\\"AWS::ECS::Container\\",\\"user\\":\\"171accd0-8e46-11ec-95ea-c323454c4001\\",\\"annotations\\":{\\"emailUuid\\":\\"171accd0-8e46-11ec-95ea-c323454c4001\\",\\"fromEmail\\":\\"Li Staff Dev <listaffdev@gmail.com>\\",\\"subject\\":\\"Re: Re: Re: Classifier Stream\\"},\\"metadata\\":{\\"default\\":{\\"emailReceivedTime\\":\\"2022-02-15T09:59:12.000Z\\",\\"noOfAttachments\\":0}},\\"subsegments\\":[{\\"id\\":\\"f0ea1ebe9ef0df7b\\",\\"name\\":\\"s3\\",\\"start_time\\":1644919222.846,\\"namespace\\":\\"aws\\",\\"aws\\":{\\"operation\\":\\"PutObject\\",\\"region\\":\\"ap-southeast-2\\",\\"request_id\\":\\"CT49WP8BD56HTDS0\\",\\"retries\\":1,\\"id_2\\":\\"k8dXOCHq9qFR/7Gmmhx1UlzvB2qMoLZ+fZ/FfKivQxP5PYPQ+xxfZVKKYxGVNnM1WR2Z0x4Y8NM=\\",\\"key\\":\\"15-02-2022/171accd0-8e46-11ec-95ea-c323454c4001/email.html\\",\\"bucket_name\\":\\"raw-email-attachment-dev\\"},\\"http\\":{\\"response\\":{\\"status\\":200,\\"content_length\\":\\"0\\"}},\\"end_time\\":1644919224.583},{\\"id\\":\\"2763c71e6e6227d2\\",\\"name\\":\\"dynamodb\\",\\"start_time\\":1644919354.899,\\"namespace\\":\\"aws\\",\\"aws\\":{\\"operation\\":\\"PutItem\\",\\"region\\":\\"ap-southeast-2\\",\\"request_id\\":\\"NELH0NTFAVHLQFAFP2MJHSU9DJVV4KQNSO5AEMVJF66Q9ASUAAJG\\",\\"retries\\":0,\\"table_name\\":\\"raw-email-staging-dev\\"},\\"http\\":{\\"response\\":{\\"status\\":200,\\"content_length\\":\\"2\\"}},\\"end_time\\":1644919355.785,\\"subsegments\\":[{\\"id\\":\\"a381191026468b40\\",\\"name\\":\\"Email auto-replier stream\\",\\"start_time\\":1644919357.086,\\"namespace\\":\\"default\\",\\"end_time\\":1644919357.086}]}],\\"end_time\\":1644919357.087}"}'
// );

// getCMD("{\"message\":\"UDP message sent: {\\\"trace_id\\\":\\\"1-620b7dca-0801fdb4778bf7519ae216ac\\\",\\\"id\\\":\\\"c15484b976114418\\\",\\\"start_time\\\":1644920265.501,\\\"name\\\":\\\"raw-crawler-xray-dev\\\",\\\"service\\\":{\\\"runtime\\\":\\\"node\\\",\\\"runtime_version\\\":\\\"v16.13.2\\\",\\\"version\\\":\\\"unknown\\\",\\\"name\\\":\\\"unknown\\\"},\\\"aws\\\":{\\\"ecs\\\":{\\\"container\\\":\\\"SL-YKalanantharasan\\\"},\\\"xray\\\":{\\\"sdk\\\":\\\"X-Ray for Node.js\\\",\\\"sdk_version\\\":\\\"3.3.4\\\",\\\"package\\\":\\\"aws-xray-sdk\\\"}},\\\"origin\\\":\\\"AWS::ECS::Container\\\",\\\"user\\\":\\\"8497e7a0-8e48-11ec-bbef-d7f48b1a77f0\\\",\\\"annotations\\\":{\\\"emailUuid\\\":\\\"8497e7a0-8e48-11ec-bbef-d7f48b1a77f0\\\",\\\"fromEmail\\\":\\\"Li Staff Dev <listaffdev@gmail.com>\\\",\\\"subject\\\":\\\"Re: Re: Re: Re: Classifier Stream\\\"},\\\"metadata\\\":{\\\"default\\\":{\\\"emailReceivedTime\\\":\\\"2022-02-15T10:17:20.000Z\\\",\\\"noOfAttachments\\\":0}},\\\"subsegments\\\":[{\\\"id\\\":\\\"0e628f4e2821560b\\\",\\\"name\\\":\\\"s3\\\",\\\"start_time\\\":1644920265.575,\\\"namespace\\\":\\\"aws\\\",\\\"aws\\\":{\\\"operation\\\":\\\"PutObject\\\",\\\"region\\\":\\\"ap-southeast-2\\\",\\\"request_id\\\":\\\"MVCNDNHYC53QTG7G\\\",\\\"retries\\\":1,\\\"id_2\\\":\\\"ZzfS0x6yl8ucJXwdZTupdVBKA+2DqMFHMmBf8ubLMtclHi1tXPICpvfrWbpXgeslzk8/WHZ4CxI=\\\",\\\"key\\\":\\\"15-02-2022/8497e7a0-8e48-11ec-bbef-d7f48b1a77f0/email.html\\\",\\\"bucket_name\\\":\\\"raw-email-attachment-dev\\\"},\\\"http\\\":{\\\"response\\\":{\\\"status\\\":200,\\\"content_length\\\":\\\"0\\\"}},\\\"end_time\\\":1644920267.32},{\\\"id\\\":\\\"13cce90b4fb314bf\\\",\\\"name\\\":\\\"dynamodb\\\",\\\"start_time\\\":1644920399.356,\\\"namespace\\\":\\\"aws\\\",\\\"aws\\\":{\\\"operation\\\":\\\"PutItem\\\",\\\"region\\\":\\\"ap-southeast-2\\\",\\\"request_id\\\":\\\"0DBSKQ1HAEBP52Q1TO97OQ5887VV4KQNSO5AEMVJF66Q9ASUAAJG\\\",\\\"retries\\\":0,\\\"table_name\\\":\\\"raw-email-staging-dev\\\"},\\\"http\\\":{\\\"response\\\":{\\\"status\\\":200,\\\"content_length\\\":\\\"2\\\"}},\\\"end_time\\\":1644920400.245,\\\"subsegments\\\":[{\\\"id\\\":\\\"b675bbdf3625e654\\\",\\\"name\\\":\\\"Email auto-replier stream\\\",\\\"start_time\\\":1644920401.452,\\\"namespace\\\":\\\"aws\\\",\\\"aws\\\":{\\\"operation\\\":\\\"PutItem\\\",\\\"region\\\":\\\"ap-southeast-2\\\",\\\"request_id\\\":\\\"VMNB827C0IAGE78JDBBCTKLOB7VV4KQNSO5AEMVJF66Q9ASUAAJG\\\",\\\"retries\\\":0,\\\"table_name\\\":\\\"raw-email-staging-dev\\\"},\\\"end_time\\\":1644920401.453}]}],\\\"end_time\\\":1644920401.453}\"}")

// getCMD(
//   '{"message":"UDP message sent: {\\"trace_id\\":\\"1-620b80b0-bd34ae07c656e2d38af5077b\\",\\"id\\":\\"906a5434d01c37a2\\",\\"start_time\\":1644921007.692,\\"name\\":\\"raw-crawler-xray-dev\\",\\"service\\":{\\"runtime\\":\\"node\\",\\"runtime_version\\":\\"v16.13.2\\",\\"version\\":\\"unknown\\",\\"name\\":\\"unknown\\"},\\"aws\\":{\\"ecs\\":{\\"container\\":\\"SL-YKalanantharasan\\"},\\"xray\\":{\\"sdk\\":\\"X-Ray for Node.js\\",\\"sdk_version\\":\\"3.3.4\\",\\"package\\":\\"aws-xray-sdk\\"}},\\"origin\\":\\"AWS::ECS::Container\\",\\"user\\":\\"3ef91c80-8e4a-11ec-a031-ff8a250d3f66\\",\\"annotations\\":{\\"emailUuid\\":\\"3ef91c80-8e4a-11ec-a031-ff8a250d3f66\\",\\"fromEmail\\":\\"Li Staff Dev <listaffdev@gmail.com>\\",\\"subject\\":\\"Re: Re: Re: Re: Classifier Stream\\"},\\"metadata\\":{\\"default\\":{\\"emailReceivedTime\\":\\"2022-02-15T10:29:11.000Z\\",\\"noOfAttachments\\":0}},\\"subsegments\\":[{\\"id\\":\\"0d03625bd6b6e7ed\\",\\"name\\":\\"s3\\",\\"start_time\\":1644921007.764,\\"namespace\\":\\"aws\\",\\"aws\\":{\\"operation\\":\\"PutObject\\",\\"region\\":\\"ap-southeast-2\\",\\"request_id\\":\\"SX9N8JTR4GG6F0F5\\",\\"retries\\":1,\\"id_2\\":\\"orwEhRVK7q9B5jG5xMV3ug0sjsfEGiNZ/8jUqE44ToHXlVTnYVFv7CMeBNXL0kwLYD2Q7radE0A=\\",\\"key\\":\\"15-02-2022/3ef91c80-8e4a-11ec-a031-ff8a250d3f66/email.html\\",\\"bucket_name\\":\\"raw-email-attachment-dev\\"},\\"http\\":{\\"response\\":{\\"status\\":200,\\"content_length\\":\\"0\\"}},\\"end_time\\":1644921009.436},{\\"id\\":\\"7498a92c998fab5b\\",\\"name\\":\\"dynamodb\\",\\"start_time\\":1644921141.756,\\"namespace\\":\\"aws\\",\\"aws\\":{\\"operation\\":\\"PutItem\\",\\"region\\":\\"ap-southeast-2\\",\\"request_id\\":\\"QLU9OU5U6C9J4MPKSMI8A5N5GVVV4KQNSO5AEMVJF66Q9ASUAAJG\\",\\"retries\\":0,\\"table_name\\":\\"raw-email-staging-dev\\"},\\"http\\":{\\"response\\":{\\"status\\":200,\\"content_length\\":\\"2\\"}},\\"end_time\\":1644921142.64,\\"subsegments\\":[{\\"id\\":\\"9964e1c9a2191b25\\",\\"name\\":\\"Email auto-replier stream\\",\\"start_time\\":1644921144.441,\\"namespace\\":\\"aws\\",\\"aws\\":{\\"operation\\":\\"Stream\\",\\"table_name\\":\\"raw-email-staging-dev\\"},\\"end_time\\":1644921144.442}]}],\\"end_time\\":1644921144.443}"}'
// );

// getCMD(
//   '{"message":"UDP message sent: {\\"trace_id\\":\\"1-620dcf3c-69adf64695cef336ae93981b\\",\\"id\\":\\"4bc11a01a92a057c\\",\\"start_time\\":1645072188.493,\\"name\\":\\"raw-crawler-xray-dev\\",\\"service\\":{\\"runtime\\":\\"node\\",\\"runtime_version\\":\\"v16.13.2\\",\\"version\\":\\"unknown\\",\\"name\\":\\"unknown\\"},\\"aws\\":{\\"ecs\\":{\\"container\\":\\"SL-YKalanantharasan\\"},\\"xray\\":{\\"sdk\\":\\"X-Ray for Node.js\\",\\"sdk_version\\":\\"3.3.4\\",\\"package\\":\\"aws-xray-sdk\\"}},\\"origin\\":\\"AWS::ECS::Container\\",\\"user\\":\\"3dc0caa0-8faa-11ec-85ee-61d19b230d20\\",\\"annotations\\":{\\"emailUuid\\":\\"3dc0caa0-8faa-11ec-85ee-61d19b230d20\\",\\"fromEmail\\":\\"Li Staff Dev <listaffdev@gmail.com>\\",\\"subject\\":\\"Re: Classifier Stream\\"},\\"metadata\\":{\\"default\\":{\\"emailReceivedTime\\":\\"2022-02-17T04:29:32.000Z\\",\\"noOfAttachments\\":0}},\\"subsegments\\":[{\\"id\\":\\"d5208c5cd8e6f3a0\\",\\"name\\":\\"s3\\",\\"start_time\\":1645072188.559,\\"namespace\\":\\"aws\\",\\"aws\\":{\\"operation\\":\\"PutObject\\",\\"region\\":\\"ap-southeast-2\\",\\"request_id\\":\\"RRMEQZCS8KDZFFZC\\",\\"retries\\":1,\\"id_2\\":\\"4c3uUOtmhx1oKkaHYOcx6/aDf2D1ArrpPiLE0xFUs3SJu0er8XtlFVOjM1X1rKtdjM2/1foA/E0=\\",\\"key\\":\\"17-02-2022/3dc0caa0-8faa-11ec-85ee-61d19b230d20/email.html\\",\\"bucket_name\\":\\"raw-email-attachment-dev\\"},\\"http\\":{\\"response\\":{\\"status\\":200,\\"content_length\\":\\"0\\"}},\\"end_time\\":1645072190.165}],\\"end_time\\":1645072321.884}"}'
// );

// console.log(JSON.parse("{\"id\":\"1-6204d6b6-7ab7d8eb24be9960b182c01f\",\"Duration\":1.165,\"LimitExceeded\":false,\"Segments\":[{\"Id\":\"2050500f2f68e43a\",\"Document\":{\"id\":\"2050500f2f68e43a\",\"name\":\"S3\",\"start_time\":1644484278.823,\"trace_id\":\"1-6204d6b6-7ab7d8eb24be9960b182c01f\",\"end_time\":1644484278.894,\"parent_id\":\"2ae91235e65df833\",\"inferred\":true,\"http\":{\"response\":{\"status\":200}},\"aws\":{\"retries\":0,\"bucket_name\":\"raw-email-attachment-dev\",\"region\":\"ap-southeast-2\",\"operation\":\"PutObject\",\"request_id\":\"F8HQARMNHWZVBDJB\",\"key\":\"10-02-2022/6804c590-8a51-11ec-97d0-1b18468f3f60/20022230.csv\",\"id_2\":\"+jmGAwAm+bGti5xzePY2Urdyt4XdUJzKcLxVRxZHRrMo45Qx8c+ElymMYplWfwwfl3iVzRVnzDE=\",\"resource_names\":[\"raw-email-attachment-dev\"]},\"origin\":\"AWS::S3::Bucket\"}}, {\"Id\":\"477dfe3f83e779fc\",\"Document\":{\"id\":\"477dfe3f83e779fc\",\"name\":\"raw-crawler-xray-segment\",\"start_time\":1644484278.377,\"trace_id\":\"1-6204d6b6-7ab7d8eb24be9960b182c01f\",\"end_time\":1644484279.542,\"aws\":{\"xray\":{\"package\":\"aws-xray-sdk\",\"sdk_version\":\"3.3.4\",\"sdk\":\"X-Ray for Node.js\"}},\"annotations\":{\"emailUuid\":\"6804c590-8a51-11ec-97d0-1b18468f3f60\"},\"metadata\":{\"default\":{\"emailUuid\":\"6804c590-8a51-11ec-97d0-1b18468f3f60\",\"subject\":\"Re: Crawler Testing\",\"emailReceivedTime\":null,\"noOfAttachments\":1,\"fromEmail\":\"Li Staff Dev <listaffdev@gmail.com>\"}},\"service\":{\"name\":\"unknown\",\"version\":\"unknown\",\"runtime\":\"node\",\"runtime_version\":\"v14.19.0\"},\"user\":\"6804c590-8a51-11ec-97d0-1b18468f3f60\",\"subsegments\":[{\"id\":\"2ae91235e65df833\",\"name\":\"S3\",\"start_time\":1644484278.823,\"end_time\":1644484278.894,\"http\":{\"response\":{\"status\":200}},\"aws\":{\"retries\":0,\"bucket_name\":\"raw-email-attachment-dev\",\"region\":\"ap-southeast-2\",\"operation\":\"PutObject\",\"request_id\":\"F8HQARMNHWZVBDJB\",\"key\":\"10-02-2022/6804c590-8a51-11ec-97d0-1b18468f3f60/20022230.csv\",\"id_2\":\"+jmGAwAm+bGti5xzePY2Urdyt4XdUJzKcLxVRxZHRrMo45Qx8c+ElymMYplWfwwfl3iVzRVnzDE=\",\"resource_names\":[\"raw-email-attachment-dev\"]},\"namespace\":\"aws\"},{\"id\":\"027c78e214fa34c6\",\"name\":\"S3\",\"start_time\":1644484278.896,\"end_time\":1644484278.947,\"http\":{\"response\":{\"status\":200}},\"aws\":{\"retries\":0,\"bucket_name\":\"raw-email-attachment-dev\",\"region\":\"ap-southeast-2\",\"operation\":\"PutObject\",\"request_id\":\"F8HPRTP9AXTWD6SV\",\"key\":\"10-02-2022/6804c590-8a51-11ec-97d0-1b18468f3f60/email.html\",\"id_2\":\"FlS8rFHR3HGjba2sWLXSCsg+3uY6QHNcDTU/JTXao5mqgysNIhFm15fJ1QrpT9nVXhrkLxBgB00=\",\"resource_names\":[\"raw-email-attachment-dev\"]},\"namespace\":\"aws\"},{\"id\":\"3820e5534f137b5e\",\"name\":\"DynamoDB\",\"start_time\":1644484278.949,\"end_time\":1644484278.99,\"http\":{\"response\":{\"status\":200}},\"aws\":{\"retries\":0,\"region\":\"ap-southeast-2\",\"operation\":\"PutItem\",\"request_id\":\"RE5ESN6AOVT3S5729PLB4A2UIVVV4KQNSO5AEMVJF66Q9ASUAAJG\",\"table_name\":\"raw-email-staging-dev\",\"resource_names\":[\"raw-email-staging-dev\"]},\"namespace\":\"aws\"},{\"id\":\"4820e5534f137b5e\",\"name\":\"DynamoDB\",\"start_time\":1644484279.949,\"end_time\":1644484279.99,\"http\":{\"response\":{\"status\":200}},\"aws\":{\"retries\":0,\"region\":\"ap-southeast-2\",\"operation\":\"PutItem\",\"request_id\":\"RE5ESN6AOVT3S5729PLB4A2UIVVV4KQNSO5AEMVJF66Q9ASUAAJG\",\"table_name\":\"raw-email-staging-dev\",\"resource_names\":[\"raw-email-staging-dev\"]},\"namespace\":\"aws\"}]}},{\"Id\":\"2688dd35181de1af\",\"Document\":{\"id\":\"2688dd35181de1af\",\"name\":\"DynamoDB\",\"start_time\":1644484279.949,\"trace_id\":\"1-6204d6b6-7ab7d8eb24be9960b182c01f\",\"end_time\":1644484279.99,\"parent_id\":\"4820e5534f137b5e\",\"inferred\":true,\"http\":{\"response\":{\"status\":200}},\"aws\":{\"retries\":0,\"region\":\"ap-southeast-2\",\"operation\":\"PutItem\",\"request_id\":\"RE5ESN6AOVT3S5729PLB4A2UIVVV4KQNSO5AEMVJF66Q9ASUAAJG\",\"table_name\":\"raw-email-staging-dev\",\"resource_names\":[\"raw-email-staging-dev\"]},\"origin\":\"AWS::DynamoDB::Table\"}}]}"))

// getCMD(
//   '{"message":"UDP message sent: {\\"trace_id\\":\\"1-621bba1c-d138e9236f62431be9fe4dc4\\",\\"id\\":\\"1234567890120210\\",\\"start_time\\":1645984286.088,\\"name\\":\\"email-classifier-event-handler-dev\\",\\"parent_id\\":\\"1234567890000120\\",\\"service\\":{\\"runtime\\":\\"node\\",\\"runtime_version\\":\\"v14.18.3\\",\\"version\\":\\"unknown\\",\\"name\\":\\"unknown\\"},\\"aws\\":{\\"xray\\":{\\"sdk\\":\\"X-Ray for Node.js\\",\\"sdk_version\\":\\"3.3.4\\",\\"package\\":\\"aws-xray-sdk\\"}},\\"subsegments\\":[{\\"id\\":\\"9246d8adcb0fbd60\\",\\"name\\":\\"raw-email-classifier-alb-dev-1813613573.ap-southeast-2.elb.amazonaws.com\\",\\"start_time\\":1645984286.191,\\"namespace\\":\\"remote\\",\\"http\\":{\\"request\\":{\\"url\\":\\"http://raw-email-classifier-alb-dev-1813613573.ap-southeast-2.elb.amazonaws.com/\\",\\"method\\":\\"GET\\"},\\"response\\":{\\"status\\":200,\\"content_length\\":60}},\\"end_time\\":1645984287.511}],\\"end_time\\":1645984287.549}"}'
// );
