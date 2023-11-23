# .ApiexistenciasTelasColoresApi

All URIs are relative to *https://tapiceria-7efd4dfba1d5.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiexistenciasTelasColoresCreate**](ApiexistenciasTelasColoresApi.md#apiexistenciasTelasColoresCreate) | **POST** /apiexistencias_telas_colores/ | 
[**apiexistenciasTelasColoresDelete**](ApiexistenciasTelasColoresApi.md#apiexistenciasTelasColoresDelete) | **DELETE** /apiexistencias_telas_colores/{id}/ | 
[**apiexistenciasTelasColoresList**](ApiexistenciasTelasColoresApi.md#apiexistenciasTelasColoresList) | **GET** /apiexistencias_telas_colores/ | 
[**apiexistenciasTelasColoresPartialUpdate**](ApiexistenciasTelasColoresApi.md#apiexistenciasTelasColoresPartialUpdate) | **PATCH** /apiexistencias_telas_colores/{id}/ | 
[**apiexistenciasTelasColoresRead**](ApiexistenciasTelasColoresApi.md#apiexistenciasTelasColoresRead) | **GET** /apiexistencias_telas_colores/{id}/ | 
[**apiexistenciasTelasColoresUpdate**](ApiexistenciasTelasColoresApi.md#apiexistenciasTelasColoresUpdate) | **PUT** /apiexistencias_telas_colores/{id}/ | 


# **apiexistenciasTelasColoresCreate**
> ExistenciasTelasColores apiexistenciasTelasColoresCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiexistenciasTelasColoresApi(configuration);

let body:.ApiexistenciasTelasColoresApiApiexistenciasTelasColoresCreateRequest = {
  // ExistenciasTelasColores
  data: {
    cantidad: -2147483648,
    telaColor: 1,
  },
};

apiInstance.apiexistenciasTelasColoresCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **ExistenciasTelasColores**|  |


### Return type

**ExistenciasTelasColores**

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

# **apiexistenciasTelasColoresDelete**
> void apiexistenciasTelasColoresDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiexistenciasTelasColoresApi(configuration);

let body:.ApiexistenciasTelasColoresApiApiexistenciasTelasColoresDeleteRequest = {
  // number | A unique integer value identifying this existencias telas colores.
  id: 1,
};

apiInstance.apiexistenciasTelasColoresDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this existencias telas colores. | defaults to undefined


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

# **apiexistenciasTelasColoresList**
> Array<ExistenciasTelasColores> apiexistenciasTelasColoresList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiexistenciasTelasColoresApi(configuration);

let body:any = {};

apiInstance.apiexistenciasTelasColoresList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<ExistenciasTelasColores>**

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

# **apiexistenciasTelasColoresPartialUpdate**
> ExistenciasTelasColores apiexistenciasTelasColoresPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiexistenciasTelasColoresApi(configuration);

let body:.ApiexistenciasTelasColoresApiApiexistenciasTelasColoresPartialUpdateRequest = {
  // number | A unique integer value identifying this existencias telas colores.
  id: 1,
  // ExistenciasTelasColores
  data: {
    cantidad: -2147483648,
    telaColor: 1,
  },
};

apiInstance.apiexistenciasTelasColoresPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **ExistenciasTelasColores**|  |
 **id** | [**number**] | A unique integer value identifying this existencias telas colores. | defaults to undefined


### Return type

**ExistenciasTelasColores**

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

# **apiexistenciasTelasColoresRead**
> ExistenciasTelasColores apiexistenciasTelasColoresRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiexistenciasTelasColoresApi(configuration);

let body:.ApiexistenciasTelasColoresApiApiexistenciasTelasColoresReadRequest = {
  // number | A unique integer value identifying this existencias telas colores.
  id: 1,
};

apiInstance.apiexistenciasTelasColoresRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this existencias telas colores. | defaults to undefined


### Return type

**ExistenciasTelasColores**

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

# **apiexistenciasTelasColoresUpdate**
> ExistenciasTelasColores apiexistenciasTelasColoresUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiexistenciasTelasColoresApi(configuration);

let body:.ApiexistenciasTelasColoresApiApiexistenciasTelasColoresUpdateRequest = {
  // number | A unique integer value identifying this existencias telas colores.
  id: 1,
  // ExistenciasTelasColores
  data: {
    cantidad: -2147483648,
    telaColor: 1,
  },
};

apiInstance.apiexistenciasTelasColoresUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **ExistenciasTelasColores**|  |
 **id** | [**number**] | A unique integer value identifying this existencias telas colores. | defaults to undefined


### Return type

**ExistenciasTelasColores**

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


