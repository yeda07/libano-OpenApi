# .ApiusersApi

All URIs are relative to *https://tapiceria-7efd4dfba1d5.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiusersCreate**](ApiusersApi.md#apiusersCreate) | **POST** /apiusers/ | 
[**apiusersDelete**](ApiusersApi.md#apiusersDelete) | **DELETE** /apiusers/{id}/ | 
[**apiusersList**](ApiusersApi.md#apiusersList) | **GET** /apiusers/ | 
[**apiusersPartialUpdate**](ApiusersApi.md#apiusersPartialUpdate) | **PATCH** /apiusers/{id}/ | 
[**apiusersRead**](ApiusersApi.md#apiusersRead) | **GET** /apiusers/{id}/ | 
[**apiusersUpdate**](ApiusersApi.md#apiusersUpdate) | **PUT** /apiusers/{id}/ | 


# **apiusersCreate**
> User apiusersCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiusersApi(configuration);

let body:.ApiusersApiApiusersCreateRequest = {
  // User
  data: {
    username: "A",
    email: "email_example",
    firstName: "firstName_example",
    lastName: "lastName_example",
    isStaff: true,
    isActive: true,
    password: "password_example",
  },
};

apiInstance.apiusersCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **User**|  |


### Return type

**User**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiusersDelete**
> void apiusersDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiusersApi(configuration);

let body:.ApiusersApiApiusersDeleteRequest = {
  // number | A unique integer value identifying this user.
  id: 1,
};

apiInstance.apiusersDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this user. | defaults to undefined


### Return type

**void**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiusersList**
> Array<User> apiusersList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiusersApi(configuration);

let body:any = {};

apiInstance.apiusersList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<User>**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiusersPartialUpdate**
> User apiusersPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiusersApi(configuration);

let body:.ApiusersApiApiusersPartialUpdateRequest = {
  // number | A unique integer value identifying this user.
  id: 1,
  // User
  data: {
    username: "A",
    email: "email_example",
    firstName: "firstName_example",
    lastName: "lastName_example",
    isStaff: true,
    isActive: true,
    password: "password_example",
  },
};

apiInstance.apiusersPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **User**|  |
 **id** | [**number**] | A unique integer value identifying this user. | defaults to undefined


### Return type

**User**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiusersRead**
> User apiusersRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiusersApi(configuration);

let body:.ApiusersApiApiusersReadRequest = {
  // number | A unique integer value identifying this user.
  id: 1,
};

apiInstance.apiusersRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this user. | defaults to undefined


### Return type

**User**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiusersUpdate**
> User apiusersUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiusersApi(configuration);

let body:.ApiusersApiApiusersUpdateRequest = {
  // number | A unique integer value identifying this user.
  id: 1,
  // User
  data: {
    username: "A",
    email: "email_example",
    firstName: "firstName_example",
    lastName: "lastName_example",
    isStaff: true,
    isActive: true,
    password: "password_example",
  },
};

apiInstance.apiusersUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **User**|  |
 **id** | [**number**] | A unique integer value identifying this user. | defaults to undefined


### Return type

**User**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


