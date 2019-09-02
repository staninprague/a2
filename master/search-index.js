var N=null,E="",T="t",U="u",searchIndex={};
var R=["LocalizedNotificationBuilder","A builder to create a localized APNs payload.","PlainNotificationBuilder","A builder to create a simple APNs notification payload.","SilentNotificationBuilder","A builder to create an APNs silent notification payload…","CollapseId","NotificationOptions","Headers to specify options to the notification.","apns_id","A canonical UUID that identifies the notification. If…","apns_expiration","A UNIX epoch date expressed in seconds (UTC). This header…","apns_priority","The priority of the notification.","apns_topic","The topic of the remote notification, which is typically…","apns_collapse_id","Multiple notifications with the same collapse identifier…","Priority","The importance how fast to bring the notification for the…","Send the push message immediately. Notifications with this…","Send the push message at a time that takes into account…","Creates a new builder with the minimum amount of content.","set_badge","A number to show on a badge on top of the app icon.","set_sound","File name of the custom sound to play when receiving the…","set_category","When a notification includes the category key, the system…","collapseid","a2::request::notification","a2::request","endpoint","result","client","payload","futureresponse","try_from","try_into","borrow_mut","type_id","to_owned","clone_into","borrow","typeid","a2::request::payload","erased_serialize","serializer","a2::error","to_string","a2::response","string","a2::client","notificationoptions","errorbody","formatter","stderror","serialize","deserialize","NotificationBuilder","APSAlert","Response","ErrorBody","ErrorReason","Endpoint","LocalizedAlert","FutureResponse"];

searchIndex["a2"]={"doc":"A2","i":[[3,R[0],"a2",R[1],N,N],[3,R[2],E,R[3],N,N],[3,R[4],E,R[5],N,N],[3,R[6],E,E,N,N],[12,"value",E,E,0,N],[3,R[7],E,R[8],N,N],[12,R[9],E,R[10],1,N],[12,R[11],E,R[12],1,N],[12,R[13],E,R[14],1,N],[12,R[15],E,R[16],1,N],[12,R[17],E,R[18],1,N],[4,R[19],E,R[20],N,N],[13,"High",E,R[21],2,N],[13,"Normal",E,R[22],2,N],[0,"request",E,"The request payload module",N,N],[0,"notification",R[32],"The `aps` notification content builders",N,N],[3,R[66],R[31],E,N,N],[3,R[0],E,R[1],N,N],[3,R[2],E,R[3],N,N],[3,R[4],E,R[5],N,N],[3,R[6],E,E,N,N],[12,"value",E,E,0,N],[3,R[7],E,R[8],N,N],[12,R[9],E,R[10],1,N],[12,R[11],E,R[12],1,N],[12,R[13],E,R[14],1,N],[12,R[15],E,R[16],1,N],[12,R[17],E,R[18],1,N],[4,R[19],E,R[20],N,N],[13,"High",E,R[21],2,N],[13,"Normal",E,R[22],2,N],[11,"new","a2",R[23],3,[[["str"]],["localizednotificationbuilder"]]],[11,R[24],E,R[25],3,[[["self"],["u32"]],["self"]]],[11,R[26],E,R[27],3,[[["self"],["str"]],["self"]]],[11,R[28],E,R[29],3,[[["self"],["str"]],["self"]]],[11,"set_title_loc_key",E,"The localization key for the notification title.",3,[[["self"],["str"]],["self"]]],[11,"set_title_loc_args",E,"Arguments for the title localization.",3,[[["self"]],["self"]]],[11,"set_action_loc_key",E,"The localization key for the action.",3,[[["self"],["str"]],["self"]]],[11,"set_loc_key",E,"The localization key for the push message body.",3,[[["self"],["str"]],["self"]]],[11,"set_loc_args",E,"Arguments for the content localization.",3,[[["self"]],["self"]]],[11,"set_launch_image",E,"Image to display in the rich notification.",3,[[["self"],["str"]],["self"]]],[11,"set_mutable_content",E,"Allow client to modify push content before displaying.",3,[[["self"]],["self"]]],[11,"new",E,R[23],4,[[["str"]],["plainnotificationbuilder"]]],[11,R[24],E,R[25],4,[[["self"],["u32"]],["self"]]],[11,R[26],E,R[27],4,[[["self"],["str"]],["self"]]],[11,R[28],E,R[29],4,[[["self"],["str"]],["self"]]],[11,"new",E,"Creates a new builder.",5,[[],["silentnotificationbuilder"]]],[11,"new",E,E,0,[[["str"]],[[R[30]],["error"],[R[34],[R[30],"error"]]]]],[8,R[60],R[31],E,N,N],[10,"build",E,"Generates the request payload to be send with the `Client`.",6,[[[R[54]],["str"]],[R[36]]]],[0,R[36],R[32],"Payload with `aps` and custom data",N,N],[3,"Payload",R[46],"The data and options for a push notification.",N,N],[12,"options",E,"Send options",7,N],[12,"device_token",E,"The token for the receiving device",7,N],[12,"aps",E,"The pre-defined notification payload",7,N],[12,"data",E,"Application specific payload",7,N],[3,"APS",E,"The pre-defined notification data.",N,N],[12,"alert",E,"The notification content. Can be empty for silent…",8,N],[12,"badge",E,"A number shown on top of the app icon.",8,N],[12,"sound",E,"The name of the sound file to play when user receives the…",8,N],[12,"content_available",E,"Set to one for silent notifications.",8,N],[12,"category",E,R[29],8,N],[12,"mutable_content",E,"If set to one, the app can change the notification content…",8,N],[4,R[61],E,"Different notification content types.",N,N],[13,"Plain",E,"Text-only notification.",9,N],[13,"Localized",E,"A rich localized notification.",9,N],[11,"add_custom_data",E,"Client-specific custom data to be added in the payload.…",7,[[["self"],[R[58]],["str"]],[["self"],[R[34],["error"]],["error"]]]],[11,"to_json_string",E,"Combine the APS payload and the custom data to a final…",7,[[],[[R[52]],[R[34],[R[52],"error"]],["error"]]]],[0,"error","a2","Error and result module",N,N],[4,"Error",R[49],E,N,N],[13,"SerializeError",E,"User request or Apple response JSON data was faulty.",10,N],[13,"ConnectionError",E,"A problem connecting to APNs servers.",10,N],[13,"TimeoutError",E,"APNs couldn't response in a timely manner, if using…",10,N],[13,"SignerError",E,"Couldn't generate an APNs token with the given key.",10,N],[13,"ResponseError",E,"APNs couldn't accept the notification. Contains Response…",10,N],[13,"InvalidOptions",E,"Invalid option values given in NotificationOptions",10,N],[13,"TlsError",E,"TLS connection failed",10,N],[13,"ReadError",E,"Error reading the certificate or private key.",10,N],[0,"response","a2","The APNs response types",N,N],[3,R[62],R[51],"The response data from APNs.",N,N],[12,"error",E,"If the notification was not successful, has the body…",11,N],[12,R[9],E,"Is the value defined in the `NotificationOptions` or a new…",11,N],[12,"code",E,"The HTTP response code.",11,N],[3,R[63],E,"The response body from APNs. Only available for errors.",N,N],[12,"reason",E,"The error indicating the reason for the failure.",12,N],[12,"timestamp",E,"If the value of the `ErrorReason` is `Unregistered`, the…",12,N],[4,R[64],E,"A description what went wrong with the push notification.",N,N],[13,"BadCollapseId",E,"The collapse identifier exceeds the maximum allowed size.",13,N],[13,"BadDeviceToken",E,"The specified device token was bad. Verify that the…",13,N],[13,"BadExpirationDate",E,"The `apns_expiration` in `NotificationOptions` is bad.",13,N],[13,"BadMessageId",E,"The `apns_id` in `NotificationOptions` is bad.",13,N],[13,"BadPriority",E,"The `apns_priority` in `NotificationOptions` is bad.",13,N],[13,"BadTopic",E,"The `apns_topic` in `NotificationOptions` is bad.",13,N],[13,"DeviceTokenNotForTopic",E,"The device token does not match the specified topic.",13,N],[13,"DuplicateHeaders",E,"One or more headers were repeated.",13,N],[13,"IdleTimeout",E,"Idle time out.",13,N],[13,"MissingDeviceToken",E,"The device token is not specified in the payload.",13,N],[13,"MissingTopic",E,"The `apns_topic` of the `NotificationOptions` was not…",13,N],[13,"PayloadEmpty",E,"The message payload was empty.",13,N],[13,"TopicDisallowed",E,"Pushing to this topic is not allowed.",13,N],[13,"BadCertificate",E,"The certificate was bad.",13,N],[13,"BadCertificateEnvironment",E,"The client certificate was for the wrong environment.",13,N],[13,"ExpiredProviderToken",E,"The provider token is stale and a new token should be…",13,N],[13,"Forbidden",E,"The specified action is not allowed.",13,N],[13,"InvalidProviderToken",E,"The provider token is not valid or the token signature…",13,N],[13,"MissingProviderToken",E,"No provider certificate was used to connect to APNs and…",13,N],[13,"BadPath",E,"The request path value is bad.",13,N],[13,"MethodNotAllowed",E,"The request method was not `POST`.",13,N],[13,"Unregistered",E,"The device token is inactive for the specified topic. You…",13,N],[13,"PayloadTooLarge",E,"The message payload was too large (4096 bytes)",13,N],[13,"TooManyProviderTokenUpdates",E,"The provider token is being updated too often.",13,N],[13,"TooManyRequests",E,"Too many requests were made consecutively to the same…",13,N],[13,"InternalServerError",E,"An internal server error occurred.",13,N],[13,"ServiceUnavailable",E,"The service is unavailable.",13,N],[13,"Shutdown",E,"The server is shutting down.",13,N],[0,R[35],"a2","The client module for sending requests and parsing responses",N,N],[3,"Client",R[53],"Handles requests to and responses from Apple Push…",N,N],[3,R[67],E,E,N,N],[4,R[65],E,"The APNs service endpoint to connect.",N,N],[13,"Production",E,"The production environment (api.push.apple.com)",14,N],[13,"Sandbox",E,"The development/test environment…",14,N],[11,"certificate",E,"Create a connection to APNs using the provider client…",15,[[[R[33]],["r"],["str"]],[[R[34],[R[35],"error"]],[R[35]],["error"]]]],[11,"token",E,"Create a connection to APNs using system certificates,…",15,[[[R[33]],["s"],[T],["r"]],[[R[34],[R[35],"error"]],[R[35]],["error"]]]],[11,"send",E,"Send a notification payload. Returns a future that needs…",15,[[["self"],[R[36]]],[R[37]]]],[11,"send_with_timeout",E,"Sends a notification with a timeout. Triggers…",15,[[["self"],["duration"],[R[36]]],[[R[37]],["timeout",[R[37]]]]]],[11,"from","a2",E,3,[[[T]],[T]]],[11,"into",E,E,3,[[],[U]]],[11,R[38],E,E,3,[[[U]],[R[34]]]],[11,R[39],E,E,3,[[],[R[34]]]],[11,R[44],E,E,3,[[["self"]],[T]]],[11,R[40],E,E,3,[[["self"]],[T]]],[11,R[41],E,E,3,[[["self"]],[R[45]]]],[11,"from",E,E,4,[[[T]],[T]]],[11,"into",E,E,4,[[],[U]]],[11,R[38],E,E,4,[[[U]],[R[34]]]],[11,R[39],E,E,4,[[],[R[34]]]],[11,R[44],E,E,4,[[["self"]],[T]]],[11,R[40],E,E,4,[[["self"]],[T]]],[11,R[41],E,E,4,[[["self"]],[R[45]]]],[11,"from",E,E,5,[[[T]],[T]]],[11,"into",E,E,5,[[],[U]]],[11,R[38],E,E,5,[[[U]],[R[34]]]],[11,R[39],E,E,5,[[],[R[34]]]],[11,R[44],E,E,5,[[["self"]],[T]]],[11,R[40],E,E,5,[[["self"]],[T]]],[11,R[41],E,E,5,[[["self"]],[R[45]]]],[11,R[42],E,E,0,[[["self"]],[T]]],[11,R[43],E,E,0,[[["self"],[T]]]],[11,"from",E,E,0,[[[T]],[T]]],[11,"into",E,E,0,[[],[U]]],[11,R[38],E,E,0,[[[U]],[R[34]]]],[11,R[39],E,E,0,[[],[R[34]]]],[11,R[44],E,E,0,[[["self"]],[T]]],[11,R[40],E,E,0,[[["self"]],[T]]],[11,R[41],E,E,0,[[["self"]],[R[45]]]],[11,R[42],E,E,1,[[["self"]],[T]]],[11,R[43],E,E,1,[[["self"],[T]]]],[11,"from",E,E,1,[[[T]],[T]]],[11,"into",E,E,1,[[],[U]]],[11,R[38],E,E,1,[[[U]],[R[34]]]],[11,R[39],E,E,1,[[],[R[34]]]],[11,R[44],E,E,1,[[["self"]],[T]]],[11,R[40],E,E,1,[[["self"]],[T]]],[11,R[41],E,E,1,[[["self"]],[R[45]]]],[11,R[42],E,E,2,[[["self"]],[T]]],[11,R[43],E,E,2,[[["self"],[T]]]],[11,"from",E,E,2,[[[T]],[T]]],[11,"into",E,E,2,[[],[U]]],[11,R[50],E,E,2,[[["self"]],[R[52]]]],[11,R[38],E,E,2,[[[U]],[R[34]]]],[11,R[39],E,E,2,[[],[R[34]]]],[11,R[44],E,E,2,[[["self"]],[T]]],[11,R[40],E,E,2,[[["self"]],[T]]],[11,R[41],E,E,2,[[["self"]],[R[45]]]],[11,R[42],R[31],E,16,[[["self"]],[T]]],[11,R[43],E,E,16,[[["self"],[T]]]],[11,"from",E,E,16,[[[T]],[T]]],[11,"into",E,E,16,[[],[U]]],[11,R[38],E,E,16,[[[U]],[R[34]]]],[11,R[39],E,E,16,[[],[R[34]]]],[11,R[44],E,E,16,[[["self"]],[T]]],[11,R[40],E,E,16,[[["self"]],[T]]],[11,R[41],E,E,16,[[["self"]],[R[45]]]],[11,R[47],E,E,16,[[["self"],[R[48]]],[["error"],["ok"],[R[34],["ok","error"]]]]],[11,R[42],R[46],E,7,[[["self"]],[T]]],[11,R[43],E,E,7,[[["self"],[T]]]],[11,"from",E,E,7,[[[T]],[T]]],[11,"into",E,E,7,[[],[U]]],[11,R[38],E,E,7,[[[U]],[R[34]]]],[11,R[39],E,E,7,[[],[R[34]]]],[11,R[44],E,E,7,[[["self"]],[T]]],[11,R[40],E,E,7,[[["self"]],[T]]],[11,R[41],E,E,7,[[["self"]],[R[45]]]],[11,R[42],E,E,8,[[["self"]],[T]]],[11,R[43],E,E,8,[[["self"],[T]]]],[11,"from",E,E,8,[[[T]],[T]]],[11,"into",E,E,8,[[],[U]]],[11,R[38],E,E,8,[[[U]],[R[34]]]],[11,R[39],E,E,8,[[],[R[34]]]],[11,R[44],E,E,8,[[["self"]],[T]]],[11,R[40],E,E,8,[[["self"]],[T]]],[11,R[41],E,E,8,[[["self"]],[R[45]]]],[11,R[47],E,E,8,[[["self"],[R[48]]],[["error"],["ok"],[R[34],["ok","error"]]]]],[11,R[42],E,E,9,[[["self"]],[T]]],[11,R[43],E,E,9,[[["self"],[T]]]],[11,"from",E,E,9,[[[T]],[T]]],[11,"into",E,E,9,[[],[U]]],[11,R[38],E,E,9,[[[U]],[R[34]]]],[11,R[39],E,E,9,[[],[R[34]]]],[11,R[44],E,E,9,[[["self"]],[T]]],[11,R[40],E,E,9,[[["self"]],[T]]],[11,R[41],E,E,9,[[["self"]],[R[45]]]],[11,R[47],E,E,9,[[["self"],[R[48]]],[["error"],["ok"],[R[34],["ok","error"]]]]],[11,"from",R[49],E,10,[[[T]],[T]]],[11,"into",E,E,10,[[],[U]]],[11,R[50],E,E,10,[[["self"]],[R[52]]]],[11,R[38],E,E,10,[[[U]],[R[34]]]],[11,R[39],E,E,10,[[],[R[34]]]],[11,R[44],E,E,10,[[["self"]],[T]]],[11,R[40],E,E,10,[[["self"]],[T]]],[11,R[41],E,E,10,[[["self"]],[R[45]]]],[11,"from",R[51],E,11,[[[T]],[T]]],[11,"into",E,E,11,[[],[U]]],[11,R[38],E,E,11,[[[U]],[R[34]]]],[11,R[39],E,E,11,[[],[R[34]]]],[11,R[44],E,E,11,[[["self"]],[T]]],[11,R[40],E,E,11,[[["self"]],[T]]],[11,R[41],E,E,11,[[["self"]],[R[45]]]],[11,"from",E,E,12,[[[T]],[T]]],[11,"into",E,E,12,[[],[U]]],[11,R[38],E,E,12,[[[U]],[R[34]]]],[11,R[39],E,E,12,[[],[R[34]]]],[11,R[44],E,E,12,[[["self"]],[T]]],[11,R[40],E,E,12,[[["self"]],[T]]],[11,R[41],E,E,12,[[["self"]],[R[45]]]],[11,"from",E,E,13,[[[T]],[T]]],[11,"into",E,E,13,[[],[U]]],[11,R[50],E,E,13,[[["self"]],[R[52]]]],[11,R[38],E,E,13,[[[U]],[R[34]]]],[11,R[39],E,E,13,[[],[R[34]]]],[11,R[44],E,E,13,[[["self"]],[T]]],[11,R[40],E,E,13,[[["self"]],[T]]],[11,R[41],E,E,13,[[["self"]],[R[45]]]],[11,"from",R[53],E,15,[[[T]],[T]]],[11,"into",E,E,15,[[],[U]]],[11,R[38],E,E,15,[[[U]],[R[34]]]],[11,R[39],E,E,15,[[],[R[34]]]],[11,R[44],E,E,15,[[["self"]],[T]]],[11,R[40],E,E,15,[[["self"]],[T]]],[11,R[41],E,E,15,[[["self"]],[R[45]]]],[11,"from",E,E,17,[[[T]],[T]]],[11,"into",E,E,17,[[],[U]]],[11,R[38],E,E,17,[[[U]],[R[34]]]],[11,R[39],E,E,17,[[],[R[34]]]],[11,R[44],E,E,17,[[["self"]],[T]]],[11,R[40],E,E,17,[[["self"]],[T]]],[11,R[41],E,E,17,[[["self"]],[R[45]]]],[11,"into_future",E,E,17,[[],["f"]]],[11,R[42],E,E,14,[[["self"]],[T]]],[11,R[43],E,E,14,[[["self"],[T]]]],[11,"from",E,E,14,[[[T]],[T]]],[11,"into",E,E,14,[[],[U]]],[11,R[50],E,E,14,[[["self"]],[R[52]]]],[11,R[38],E,E,14,[[[U]],[R[34]]]],[11,R[39],E,E,14,[[],[R[34]]]],[11,R[44],E,E,14,[[["self"]],[T]]],[11,R[40],E,E,14,[[["self"]],[T]]],[11,R[41],E,E,14,[[["self"]],[R[45]]]],[11,"build","a2",E,3,[[[R[54]],["str"]],[R[36]]]],[11,"build",E,E,4,[[[R[54]],["str"]],[R[36]]]],[11,"build",E,E,5,[[[R[54]],["str"]],[R[36]]]],[11,"default",E,E,1,[[],[R[54]]]],[11,"clone",R[31],E,16,[[["self"]],["localizedalert"]]],[11,"clone","a2",E,0,[[["self"]],[R[30]]]],[11,"clone",E,E,1,[[["self"]],[R[54]]]],[11,"clone",E,E,2,[[["self"]],["priority"]]],[11,"clone",R[46],E,7,[[["self"]],[R[36]]]],[11,"clone",E,E,8,[[["self"]],["aps"]]],[11,"clone",E,E,9,[[["self"]],["apsalert"]]],[11,"clone",R[53],E,14,[[["self"]],[R[33]]]],[11,"eq",R[51],E,12,[[["self"],[R[55]]],["bool"]]],[11,"ne",E,E,12,[[["self"],[R[55]]],["bool"]]],[11,"eq",E,E,13,[[["self"],["errorreason"]],["bool"]]],[11,"from",R[49],E,10,[[[R[37]],["timeouterror",[R[37]]]],["error"]]],[11,"from",E,E,10,[[["serdeerror"]],["error"]]],[11,"from",E,E,10,[[["errorstack"]],["error"]]],[11,"from",E,E,10,[[["ioerror"]],["error"]]],[11,"fmt","a2",E,2,[[["self"],[R[56]]],[R[34]]]],[11,"fmt",R[49],E,10,[[["self"],[R[56]]],[R[34]]]],[11,"fmt",R[51],E,13,[[["self"],[R[56]]],[R[34]]]],[11,"fmt",R[53],E,14,[[["self"],[R[56]]],[R[34]]]],[11,"fmt",R[31],E,16,[[["self"],[R[56]]],[R[34]]]],[11,"fmt","a2",E,0,[[["self"],[R[56]]],[R[34]]]],[11,"fmt",E,E,1,[[["self"],[R[56]]],[R[34]]]],[11,"fmt",E,E,2,[[["self"],[R[56]]],[R[34]]]],[11,"fmt",R[46],E,7,[[["self"],[R[56]]],[R[34]]]],[11,"fmt",E,E,8,[[["self"],[R[56]]],[R[34]]]],[11,"fmt",E,E,9,[[["self"],[R[56]]],[R[34]]]],[11,"fmt",R[49],E,10,[[["self"],[R[56]]],[R[34]]]],[11,"fmt",R[51],E,11,[[["self"],[R[56]]],[R[34]]]],[11,"fmt",E,E,12,[[["self"],[R[56]]],[R[34]]]],[11,"fmt",E,E,13,[[["self"],[R[56]]],[R[34]]]],[11,"fmt",R[53],E,14,[[["self"],[R[56]]],[R[34]]]],[11,"fmt",E,E,17,[[["self"],[R[56]]],[R[34]]]],[11,"description",R[49],E,10,[[["self"]],["str"]]],[11,"cause",E,E,10,[[["self"]],[[R[57]],["option",[R[57]]]]]],[11,R[58],R[31],E,16,[[["self"],["__s"]],[R[34]]]],[11,R[58],R[46],E,8,[[["self"],["__s"]],[R[34]]]],[11,R[58],E,E,9,[[["self"],["__s"]],[R[34]]]],[11,R[59],R[51],E,12,[[["__d"]],[R[34]]]],[11,R[59],E,E,13,[[["__d"]],[R[34]]]],[11,"poll",R[53],E,17,[[["self"]],["poll"]]]],"p":[[3,R[6]],[3,R[7]],[4,R[19]],[3,R[0]],[3,R[2]],[3,R[4]],[8,R[60]],[3,"Payload"],[3,"APS"],[4,R[61]],[4,"Error"],[3,R[62]],[3,R[63]],[4,R[64]],[4,R[65]],[3,"Client"],[3,R[66]],[3,R[67]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);