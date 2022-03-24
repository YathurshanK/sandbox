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
