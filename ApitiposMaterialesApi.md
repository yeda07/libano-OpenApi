# .ApitiposMaterialesApi

All URIs are relative to *https://tapiceria-7efd4dfba1d5.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apitiposMaterialesCreate**](ApitiposMaterialesApi.md#apitiposMaterialesCreate) | **POST** /apitipos_materiales/ | 
[**apitiposMaterialesDelete**](ApitiposMaterialesApi.md#apitiposMaterialesDelete) | **DELETE** /apitipos_materiales/{id}/ | 
[**apitiposMaterialesList**](ApitiposMaterialesApi.md#apitiposMaterialesList) | **GET** /apitipos_materiales/ | 
[**apitiposMaterialesPartialUpdate**](ApitiposMaterialesApi.md#apitiposMaterialesPartialUpdate) | **PATCH** /apitipos_materiales/{id}/ | 
[**apitiposMaterialesRead**](ApitiposMaterialesApi.md#apitiposMaterialesRead) | **GET** /apitipos_materiales/{id}/ | 
[**apitiposMaterialesUpdate**](ApitiposMaterialesApi.md#apitiposMaterialesUpdate) | **PUT** /apitipos_materiales/{id}/ | 


# **apitiposMaterialesCreate**
> TiposMateriales apitiposMaterialesCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitiposMaterialesApi(configuration);

let body:.ApitiposMaterialesApiApitiposMaterialesCreateRequest = {
  // TiposMateriales
  data: {
    nombre: "nombre_example",
  },
};

apiInstance.apitiposMaterialesCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **TiposMateriales**|  |


### Return type

**TiposMateriales**

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

# **apitiposMaterialesDelete**
> void apitiposMaterialesDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitiposMaterialesApi(configuration);

let body:.ApitiposMaterialesApiApitiposMaterialesDeleteRequest = {
  // number | A unique integer value identifying this tipos materiales.
  id: 1,
};

apiInstance.apitiposMaterialesDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this tipos materiales. | defaults to undefined


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

# **apitiposMaterialesList**
> Array<TiposMateriales> apitiposMaterialesList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitiposMaterialesApi(configuration);

let body:any = {};

apiInstance.apitiposMaterialesList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<TiposMateriales>**

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

# **apitiposMaterialesPartialUpdate**
> TiposMateriales apitiposMaterialesPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitiposMaterialesApi(configuration);

let body:.ApitiposMaterialesApiApitiposMaterialesPartialUpdateRequest = {
  // number | A unique integer value identifying this tipos materiales.
  id: 1,
  // TiposMateriales
  data: {
    nombre: "nombre_example",
  },
};

apiInstance.apitiposMaterialesPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **TiposMateriales**|  |
 **id** | [**number**] | A unique integer value identifying this tipos materiales. | defaults to undefined


### Return type

**TiposMateriales**

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

# **apitiposMaterialesRead**
> TiposMateriales apitiposMaterialesRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitiposMaterialesApi(configuration);

let body:.ApitiposMaterialesApiApitiposMaterialesReadRequest = {
  // number | A unique integer value identifying this tipos materiales.
  id: 1,
};

apiInstance.apitiposMaterialesRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this tipos materiales. | defaults to undefined


### Return type

**TiposMateriales**

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

# **apitiposMaterialesUpdate**
> TiposMateriales apitiposMaterialesUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitiposMaterialesApi(configuration);

let body:.ApitiposMaterialesApiApitiposMaterialesUpdateRequest = {
  // number | A unique integer value identifying this tipos materiales.
  id: 1,
  // TiposMateriales
  data: {
    nombre: "nombre_example",
  },
};

apiInstance.apitiposMaterialesUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **TiposMateriales**|  |
 **id** | [**number**] | A unique integer value identifying this tipos materiales. | defaults to undefined


### Return type

**TiposMateriales**

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


