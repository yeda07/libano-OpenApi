# .ApitiposTelasApi

All URIs are relative to *https://tapiceria-7efd4dfba1d5.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apitiposTelasCreate**](ApitiposTelasApi.md#apitiposTelasCreate) | **POST** /apitiposTelas/ | 
[**apitiposTelasDelete**](ApitiposTelasApi.md#apitiposTelasDelete) | **DELETE** /apitiposTelas/{id}/ | 
[**apitiposTelasList**](ApitiposTelasApi.md#apitiposTelasList) | **GET** /apitiposTelas/ | 
[**apitiposTelasPartialUpdate**](ApitiposTelasApi.md#apitiposTelasPartialUpdate) | **PATCH** /apitiposTelas/{id}/ | 
[**apitiposTelasRead**](ApitiposTelasApi.md#apitiposTelasRead) | **GET** /apitiposTelas/{id}/ | 
[**apitiposTelasUpdate**](ApitiposTelasApi.md#apitiposTelasUpdate) | **PUT** /apitiposTelas/{id}/ | 


# **apitiposTelasCreate**
> TiposTelas apitiposTelasCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitiposTelasApi(configuration);

let body:.ApitiposTelasApiApitiposTelasCreateRequest = {
  // TiposTelas
  data: {
    nombre: "nombre_example",
  },
};

apiInstance.apitiposTelasCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **TiposTelas**|  |


### Return type

**TiposTelas**

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

# **apitiposTelasDelete**
> void apitiposTelasDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitiposTelasApi(configuration);

let body:.ApitiposTelasApiApitiposTelasDeleteRequest = {
  // number | A unique integer value identifying this tipos telas.
  id: 1,
};

apiInstance.apitiposTelasDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this tipos telas. | defaults to undefined


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

# **apitiposTelasList**
> Array<TiposTelas> apitiposTelasList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitiposTelasApi(configuration);

let body:any = {};

apiInstance.apitiposTelasList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<TiposTelas>**

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

# **apitiposTelasPartialUpdate**
> TiposTelas apitiposTelasPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitiposTelasApi(configuration);

let body:.ApitiposTelasApiApitiposTelasPartialUpdateRequest = {
  // number | A unique integer value identifying this tipos telas.
  id: 1,
  // TiposTelas
  data: {
    nombre: "nombre_example",
  },
};

apiInstance.apitiposTelasPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **TiposTelas**|  |
 **id** | [**number**] | A unique integer value identifying this tipos telas. | defaults to undefined


### Return type

**TiposTelas**

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

# **apitiposTelasRead**
> TiposTelas apitiposTelasRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitiposTelasApi(configuration);

let body:.ApitiposTelasApiApitiposTelasReadRequest = {
  // number | A unique integer value identifying this tipos telas.
  id: 1,
};

apiInstance.apitiposTelasRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this tipos telas. | defaults to undefined


### Return type

**TiposTelas**

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

# **apitiposTelasUpdate**
> TiposTelas apitiposTelasUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitiposTelasApi(configuration);

let body:.ApitiposTelasApiApitiposTelasUpdateRequest = {
  // number | A unique integer value identifying this tipos telas.
  id: 1,
  // TiposTelas
  data: {
    nombre: "nombre_example",
  },
};

apiInstance.apitiposTelasUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **TiposTelas**|  |
 **id** | [**number**] | A unique integer value identifying this tipos telas. | defaults to undefined


### Return type

**TiposTelas**

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


