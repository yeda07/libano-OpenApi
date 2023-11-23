# .ApicomprasApi

All URIs are relative to *https://tapiceria-7efd4dfba1d5.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apicomprasCreate**](ApicomprasApi.md#apicomprasCreate) | **POST** /apicompras/ | 
[**apicomprasDelete**](ApicomprasApi.md#apicomprasDelete) | **DELETE** /apicompras/{id}/ | 
[**apicomprasList**](ApicomprasApi.md#apicomprasList) | **GET** /apicompras/ | 
[**apicomprasPartialUpdate**](ApicomprasApi.md#apicomprasPartialUpdate) | **PATCH** /apicompras/{id}/ | 
[**apicomprasRead**](ApicomprasApi.md#apicomprasRead) | **GET** /apicompras/{id}/ | 
[**apicomprasUpdate**](ApicomprasApi.md#apicomprasUpdate) | **PUT** /apicompras/{id}/ | 


# **apicomprasCreate**
> Compras apicomprasCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicomprasApi(configuration);

let body:.ApicomprasApiApicomprasCreateRequest = {
  // Compras
  data: {
    fechaCompra: new Date('1970-01-01').toISOString().split('T')[0];,
    comprador: 1,
    proveedor: 1,
  },
};

apiInstance.apicomprasCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Compras**|  |


### Return type

**Compras**

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

# **apicomprasDelete**
> void apicomprasDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicomprasApi(configuration);

let body:.ApicomprasApiApicomprasDeleteRequest = {
  // number | A unique integer value identifying this compras.
  id: 1,
};

apiInstance.apicomprasDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this compras. | defaults to undefined


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

# **apicomprasList**
> Array<Compras> apicomprasList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicomprasApi(configuration);

let body:any = {};

apiInstance.apicomprasList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Compras>**

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

# **apicomprasPartialUpdate**
> Compras apicomprasPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicomprasApi(configuration);

let body:.ApicomprasApiApicomprasPartialUpdateRequest = {
  // number | A unique integer value identifying this compras.
  id: 1,
  // Compras
  data: {
    fechaCompra: new Date('1970-01-01').toISOString().split('T')[0];,
    comprador: 1,
    proveedor: 1,
  },
};

apiInstance.apicomprasPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Compras**|  |
 **id** | [**number**] | A unique integer value identifying this compras. | defaults to undefined


### Return type

**Compras**

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

# **apicomprasRead**
> Compras apicomprasRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicomprasApi(configuration);

let body:.ApicomprasApiApicomprasReadRequest = {
  // number | A unique integer value identifying this compras.
  id: 1,
};

apiInstance.apicomprasRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this compras. | defaults to undefined


### Return type

**Compras**

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

# **apicomprasUpdate**
> Compras apicomprasUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicomprasApi(configuration);

let body:.ApicomprasApiApicomprasUpdateRequest = {
  // number | A unique integer value identifying this compras.
  id: 1,
  // Compras
  data: {
    fechaCompra: new Date('1970-01-01').toISOString().split('T')[0];,
    comprador: 1,
    proveedor: 1,
  },
};

apiInstance.apicomprasUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Compras**|  |
 **id** | [**number**] | A unique integer value identifying this compras. | defaults to undefined


### Return type

**Compras**

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


