# .ApitiposProductosApi

All URIs are relative to *https://tapiceria-7efd4dfba1d5.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apitiposProductosCreate**](ApitiposProductosApi.md#apitiposProductosCreate) | **POST** /apitipos_productos/ | 
[**apitiposProductosDelete**](ApitiposProductosApi.md#apitiposProductosDelete) | **DELETE** /apitipos_productos/{id}/ | 
[**apitiposProductosList**](ApitiposProductosApi.md#apitiposProductosList) | **GET** /apitipos_productos/ | 
[**apitiposProductosPartialUpdate**](ApitiposProductosApi.md#apitiposProductosPartialUpdate) | **PATCH** /apitipos_productos/{id}/ | 
[**apitiposProductosRead**](ApitiposProductosApi.md#apitiposProductosRead) | **GET** /apitipos_productos/{id}/ | 
[**apitiposProductosUpdate**](ApitiposProductosApi.md#apitiposProductosUpdate) | **PUT** /apitipos_productos/{id}/ | 


# **apitiposProductosCreate**
> TiposProductos apitiposProductosCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitiposProductosApi(configuration);

let body:.ApitiposProductosApiApitiposProductosCreateRequest = {
  // TiposProductos
  data: {
    nombre: "nombre_example",
  },
};

apiInstance.apitiposProductosCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **TiposProductos**|  |


### Return type

**TiposProductos**

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

# **apitiposProductosDelete**
> void apitiposProductosDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitiposProductosApi(configuration);

let body:.ApitiposProductosApiApitiposProductosDeleteRequest = {
  // number | A unique integer value identifying this tipos productos.
  id: 1,
};

apiInstance.apitiposProductosDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this tipos productos. | defaults to undefined


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

# **apitiposProductosList**
> Array<TiposProductos> apitiposProductosList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitiposProductosApi(configuration);

let body:any = {};

apiInstance.apitiposProductosList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<TiposProductos>**

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

# **apitiposProductosPartialUpdate**
> TiposProductos apitiposProductosPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitiposProductosApi(configuration);

let body:.ApitiposProductosApiApitiposProductosPartialUpdateRequest = {
  // number | A unique integer value identifying this tipos productos.
  id: 1,
  // TiposProductos
  data: {
    nombre: "nombre_example",
  },
};

apiInstance.apitiposProductosPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **TiposProductos**|  |
 **id** | [**number**] | A unique integer value identifying this tipos productos. | defaults to undefined


### Return type

**TiposProductos**

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

# **apitiposProductosRead**
> TiposProductos apitiposProductosRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitiposProductosApi(configuration);

let body:.ApitiposProductosApiApitiposProductosReadRequest = {
  // number | A unique integer value identifying this tipos productos.
  id: 1,
};

apiInstance.apitiposProductosRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this tipos productos. | defaults to undefined


### Return type

**TiposProductos**

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

# **apitiposProductosUpdate**
> TiposProductos apitiposProductosUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApitiposProductosApi(configuration);

let body:.ApitiposProductosApiApitiposProductosUpdateRequest = {
  // number | A unique integer value identifying this tipos productos.
  id: 1,
  // TiposProductos
  data: {
    nombre: "nombre_example",
  },
};

apiInstance.apitiposProductosUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **TiposProductos**|  |
 **id** | [**number**] | A unique integer value identifying this tipos productos. | defaults to undefined


### Return type

**TiposProductos**

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


