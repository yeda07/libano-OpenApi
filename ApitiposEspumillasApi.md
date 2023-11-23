# .ApitiposEspumillasApi

All URIs are relative to *https://tapiceria-7efd4dfba1d5.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apitiposEspumillasCreate**](ApitiposEspumillasApi.md#apitiposEspumillasCreate) | **POST** /apitipos_espumillas/ | 
[**apitiposEspumillasDelete**](ApitiposEspumillasApi.md#apitiposEspumillasDelete) | **DELETE** /apitipos_espumillas/{id}/ | 
[**apitiposEspumillasList**](ApitiposEspumillasApi.md#apitiposEspumillasList) | **GET** /apitipos_espumillas/ | 
[**apitiposEspumillasPartialUpdate**](ApitiposEspumillasApi.md#apitiposEspumillasPartialUpdate) | **PATCH** /apitipos_espumillas/{id}/ | 
[**apitiposEspumillasRead**](ApitiposEspumillasApi.md#apitiposEspumillasRead) | **GET** /apitipos_espumillas/{id}/ | 
[**apitiposEspumillasUpdate**](ApitiposEspumillasApi.md#apitiposEspumillasUpdate) | **PUT** /apitipos_espumillas/{id}/ | 


# **apitiposEspumillasCreate**
> TiposEspumillas apitiposEspumillasCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitiposEspumillasApi(configuration);

let body:.ApitiposEspumillasApiApitiposEspumillasCreateRequest = {
  // TiposEspumillas
  data: {
    nombre: "nombre_example",
  },
};

apiInstance.apitiposEspumillasCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **TiposEspumillas**|  |


### Return type

**TiposEspumillas**

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

# **apitiposEspumillasDelete**
> void apitiposEspumillasDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitiposEspumillasApi(configuration);

let body:.ApitiposEspumillasApiApitiposEspumillasDeleteRequest = {
  // number | A unique integer value identifying this tipos espumillas.
  id: 1,
};

apiInstance.apitiposEspumillasDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this tipos espumillas. | defaults to undefined


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

# **apitiposEspumillasList**
> Array<TiposEspumillas> apitiposEspumillasList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitiposEspumillasApi(configuration);

let body:any = {};

apiInstance.apitiposEspumillasList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<TiposEspumillas>**

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

# **apitiposEspumillasPartialUpdate**
> TiposEspumillas apitiposEspumillasPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitiposEspumillasApi(configuration);

let body:.ApitiposEspumillasApiApitiposEspumillasPartialUpdateRequest = {
  // number | A unique integer value identifying this tipos espumillas.
  id: 1,
  // TiposEspumillas
  data: {
    nombre: "nombre_example",
  },
};

apiInstance.apitiposEspumillasPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **TiposEspumillas**|  |
 **id** | [**number**] | A unique integer value identifying this tipos espumillas. | defaults to undefined


### Return type

**TiposEspumillas**

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

# **apitiposEspumillasRead**
> TiposEspumillas apitiposEspumillasRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitiposEspumillasApi(configuration);

let body:.ApitiposEspumillasApiApitiposEspumillasReadRequest = {
  // number | A unique integer value identifying this tipos espumillas.
  id: 1,
};

apiInstance.apitiposEspumillasRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this tipos espumillas. | defaults to undefined


### Return type

**TiposEspumillas**

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

# **apitiposEspumillasUpdate**
> TiposEspumillas apitiposEspumillasUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitiposEspumillasApi(configuration);

let body:.ApitiposEspumillasApiApitiposEspumillasUpdateRequest = {
  // number | A unique integer value identifying this tipos espumillas.
  id: 1,
  // TiposEspumillas
  data: {
    nombre: "nombre_example",
  },
};

apiInstance.apitiposEspumillasUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **TiposEspumillas**|  |
 **id** | [**number**] | A unique integer value identifying this tipos espumillas. | defaults to undefined


### Return type

**TiposEspumillas**

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


