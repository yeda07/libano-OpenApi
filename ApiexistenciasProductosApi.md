# .ApiexistenciasProductosApi

All URIs are relative to *https://tapiceria-7efd4dfba1d5.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiexistenciasProductosCreate**](ApiexistenciasProductosApi.md#apiexistenciasProductosCreate) | **POST** /apiexistencias_productos/ | 
[**apiexistenciasProductosDelete**](ApiexistenciasProductosApi.md#apiexistenciasProductosDelete) | **DELETE** /apiexistencias_productos/{id}/ | 
[**apiexistenciasProductosList**](ApiexistenciasProductosApi.md#apiexistenciasProductosList) | **GET** /apiexistencias_productos/ | 
[**apiexistenciasProductosPartialUpdate**](ApiexistenciasProductosApi.md#apiexistenciasProductosPartialUpdate) | **PATCH** /apiexistencias_productos/{id}/ | 
[**apiexistenciasProductosRead**](ApiexistenciasProductosApi.md#apiexistenciasProductosRead) | **GET** /apiexistencias_productos/{id}/ | 
[**apiexistenciasProductosUpdate**](ApiexistenciasProductosApi.md#apiexistenciasProductosUpdate) | **PUT** /apiexistencias_productos/{id}/ | 


# **apiexistenciasProductosCreate**
> ExistenciasProductos apiexistenciasProductosCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiexistenciasProductosApi(configuration);

let body:.ApiexistenciasProductosApiApiexistenciasProductosCreateRequest = {
  // ExistenciasProductos
  data: {
    cantidad: -2147483648,
    producto: 1,
  },
};

apiInstance.apiexistenciasProductosCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **ExistenciasProductos**|  |


### Return type

**ExistenciasProductos**

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

# **apiexistenciasProductosDelete**
> void apiexistenciasProductosDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiexistenciasProductosApi(configuration);

let body:.ApiexistenciasProductosApiApiexistenciasProductosDeleteRequest = {
  // number | A unique integer value identifying this existencias productos.
  id: 1,
};

apiInstance.apiexistenciasProductosDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this existencias productos. | defaults to undefined


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

# **apiexistenciasProductosList**
> Array<ExistenciasProductos> apiexistenciasProductosList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiexistenciasProductosApi(configuration);

let body:any = {};

apiInstance.apiexistenciasProductosList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<ExistenciasProductos>**

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

# **apiexistenciasProductosPartialUpdate**
> ExistenciasProductos apiexistenciasProductosPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiexistenciasProductosApi(configuration);

let body:.ApiexistenciasProductosApiApiexistenciasProductosPartialUpdateRequest = {
  // number | A unique integer value identifying this existencias productos.
  id: 1,
  // ExistenciasProductos
  data: {
    cantidad: -2147483648,
    producto: 1,
  },
};

apiInstance.apiexistenciasProductosPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **ExistenciasProductos**|  |
 **id** | [**number**] | A unique integer value identifying this existencias productos. | defaults to undefined


### Return type

**ExistenciasProductos**

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

# **apiexistenciasProductosRead**
> ExistenciasProductos apiexistenciasProductosRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiexistenciasProductosApi(configuration);

let body:.ApiexistenciasProductosApiApiexistenciasProductosReadRequest = {
  // number | A unique integer value identifying this existencias productos.
  id: 1,
};

apiInstance.apiexistenciasProductosRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this existencias productos. | defaults to undefined


### Return type

**ExistenciasProductos**

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

# **apiexistenciasProductosUpdate**
> ExistenciasProductos apiexistenciasProductosUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiexistenciasProductosApi(configuration);

let body:.ApiexistenciasProductosApiApiexistenciasProductosUpdateRequest = {
  // number | A unique integer value identifying this existencias productos.
  id: 1,
  // ExistenciasProductos
  data: {
    cantidad: -2147483648,
    producto: 1,
  },
};

apiInstance.apiexistenciasProductosUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **ExistenciasProductos**|  |
 **id** | [**number**] | A unique integer value identifying this existencias productos. | defaults to undefined


### Return type

**ExistenciasProductos**

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


