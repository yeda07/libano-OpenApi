# .ApiexistenciasEspumillasApi

All URIs are relative to *https://tapiceria-7efd4dfba1d5.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiexistenciasEspumillasCreate**](ApiexistenciasEspumillasApi.md#apiexistenciasEspumillasCreate) | **POST** /apiexistencias_espumillas/ | 
[**apiexistenciasEspumillasDelete**](ApiexistenciasEspumillasApi.md#apiexistenciasEspumillasDelete) | **DELETE** /apiexistencias_espumillas/{id}/ | 
[**apiexistenciasEspumillasList**](ApiexistenciasEspumillasApi.md#apiexistenciasEspumillasList) | **GET** /apiexistencias_espumillas/ | 
[**apiexistenciasEspumillasPartialUpdate**](ApiexistenciasEspumillasApi.md#apiexistenciasEspumillasPartialUpdate) | **PATCH** /apiexistencias_espumillas/{id}/ | 
[**apiexistenciasEspumillasRead**](ApiexistenciasEspumillasApi.md#apiexistenciasEspumillasRead) | **GET** /apiexistencias_espumillas/{id}/ | 
[**apiexistenciasEspumillasUpdate**](ApiexistenciasEspumillasApi.md#apiexistenciasEspumillasUpdate) | **PUT** /apiexistencias_espumillas/{id}/ | 


# **apiexistenciasEspumillasCreate**
> ExistenciasEspumillas apiexistenciasEspumillasCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiexistenciasEspumillasApi(configuration);

let body:.ApiexistenciasEspumillasApiApiexistenciasEspumillasCreateRequest = {
  // ExistenciasEspumillas
  data: {
    cantidad: -2147483648,
    tipoEspumilla: 1,
  },
};

apiInstance.apiexistenciasEspumillasCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **ExistenciasEspumillas**|  |


### Return type

**ExistenciasEspumillas**

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

# **apiexistenciasEspumillasDelete**
> void apiexistenciasEspumillasDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiexistenciasEspumillasApi(configuration);

let body:.ApiexistenciasEspumillasApiApiexistenciasEspumillasDeleteRequest = {
  // number | A unique integer value identifying this existencias espumillas.
  id: 1,
};

apiInstance.apiexistenciasEspumillasDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this existencias espumillas. | defaults to undefined


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

# **apiexistenciasEspumillasList**
> Array<ExistenciasEspumillas> apiexistenciasEspumillasList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiexistenciasEspumillasApi(configuration);

let body:any = {};

apiInstance.apiexistenciasEspumillasList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<ExistenciasEspumillas>**

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

# **apiexistenciasEspumillasPartialUpdate**
> ExistenciasEspumillas apiexistenciasEspumillasPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiexistenciasEspumillasApi(configuration);

let body:.ApiexistenciasEspumillasApiApiexistenciasEspumillasPartialUpdateRequest = {
  // number | A unique integer value identifying this existencias espumillas.
  id: 1,
  // ExistenciasEspumillas
  data: {
    cantidad: -2147483648,
    tipoEspumilla: 1,
  },
};

apiInstance.apiexistenciasEspumillasPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **ExistenciasEspumillas**|  |
 **id** | [**number**] | A unique integer value identifying this existencias espumillas. | defaults to undefined


### Return type

**ExistenciasEspumillas**

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

# **apiexistenciasEspumillasRead**
> ExistenciasEspumillas apiexistenciasEspumillasRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiexistenciasEspumillasApi(configuration);

let body:.ApiexistenciasEspumillasApiApiexistenciasEspumillasReadRequest = {
  // number | A unique integer value identifying this existencias espumillas.
  id: 1,
};

apiInstance.apiexistenciasEspumillasRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this existencias espumillas. | defaults to undefined


### Return type

**ExistenciasEspumillas**

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

# **apiexistenciasEspumillasUpdate**
> ExistenciasEspumillas apiexistenciasEspumillasUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiexistenciasEspumillasApi(configuration);

let body:.ApiexistenciasEspumillasApiApiexistenciasEspumillasUpdateRequest = {
  // number | A unique integer value identifying this existencias espumillas.
  id: 1,
  // ExistenciasEspumillas
  data: {
    cantidad: -2147483648,
    tipoEspumilla: 1,
  },
};

apiInstance.apiexistenciasEspumillasUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **ExistenciasEspumillas**|  |
 **id** | [**number**] | A unique integer value identifying this existencias espumillas. | defaults to undefined


### Return type

**ExistenciasEspumillas**

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


