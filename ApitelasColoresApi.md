# .ApitelasColoresApi

All URIs are relative to *https://tapiceria-7efd4dfba1d5.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apitelasColoresCreate**](ApitelasColoresApi.md#apitelasColoresCreate) | **POST** /apitelas_colores/ | 
[**apitelasColoresDelete**](ApitelasColoresApi.md#apitelasColoresDelete) | **DELETE** /apitelas_colores/{id}/ | 
[**apitelasColoresList**](ApitelasColoresApi.md#apitelasColoresList) | **GET** /apitelas_colores/ | 
[**apitelasColoresPartialUpdate**](ApitelasColoresApi.md#apitelasColoresPartialUpdate) | **PATCH** /apitelas_colores/{id}/ | 
[**apitelasColoresRead**](ApitelasColoresApi.md#apitelasColoresRead) | **GET** /apitelas_colores/{id}/ | 
[**apitelasColoresUpdate**](ApitelasColoresApi.md#apitelasColoresUpdate) | **PUT** /apitelas_colores/{id}/ | 


# **apitelasColoresCreate**
> TelasColores apitelasColoresCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitelasColoresApi(configuration);

let body:.ApitelasColoresApiApitelasColoresCreateRequest = {
  // TelasColores
  data: {
  },
};

apiInstance.apitelasColoresCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **TelasColores**|  |


### Return type

**TelasColores**

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

# **apitelasColoresDelete**
> void apitelasColoresDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitelasColoresApi(configuration);

let body:.ApitelasColoresApiApitelasColoresDeleteRequest = {
  // number | A unique integer value identifying this telas colores.
  id: 1,
};

apiInstance.apitelasColoresDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this telas colores. | defaults to undefined


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

# **apitelasColoresList**
> Array<TelasColores> apitelasColoresList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitelasColoresApi(configuration);

let body:any = {};

apiInstance.apitelasColoresList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<TelasColores>**

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

# **apitelasColoresPartialUpdate**
> TelasColores apitelasColoresPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitelasColoresApi(configuration);

let body:.ApitelasColoresApiApitelasColoresPartialUpdateRequest = {
  // number | A unique integer value identifying this telas colores.
  id: 1,
  // TelasColores
  data: {
  },
};

apiInstance.apitelasColoresPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **TelasColores**|  |
 **id** | [**number**] | A unique integer value identifying this telas colores. | defaults to undefined


### Return type

**TelasColores**

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

# **apitelasColoresRead**
> TelasColores apitelasColoresRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitelasColoresApi(configuration);

let body:.ApitelasColoresApiApitelasColoresReadRequest = {
  // number | A unique integer value identifying this telas colores.
  id: 1,
};

apiInstance.apitelasColoresRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this telas colores. | defaults to undefined


### Return type

**TelasColores**

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

# **apitelasColoresUpdate**
> TelasColores apitelasColoresUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitelasColoresApi(configuration);

let body:.ApitelasColoresApiApitelasColoresUpdateRequest = {
  // number | A unique integer value identifying this telas colores.
  id: 1,
  // TelasColores
  data: {
  },
};

apiInstance.apitelasColoresUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **TelasColores**|  |
 **id** | [**number**] | A unique integer value identifying this telas colores. | defaults to undefined


### Return type

**TelasColores**

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


