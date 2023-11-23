# .ApipagosApi

All URIs are relative to *https://tapiceria-7efd4dfba1d5.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apipagosCreate**](ApipagosApi.md#apipagosCreate) | **POST** /apipagos/ | 
[**apipagosDelete**](ApipagosApi.md#apipagosDelete) | **DELETE** /apipagos/{id}/ | 
[**apipagosList**](ApipagosApi.md#apipagosList) | **GET** /apipagos/ | 
[**apipagosPartialUpdate**](ApipagosApi.md#apipagosPartialUpdate) | **PATCH** /apipagos/{id}/ | 
[**apipagosRead**](ApipagosApi.md#apipagosRead) | **GET** /apipagos/{id}/ | 
[**apipagosUpdate**](ApipagosApi.md#apipagosUpdate) | **PUT** /apipagos/{id}/ | 


# **apipagosCreate**
> Pagos apipagosCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApipagosApi(configuration);

let body:.ApipagosApiApipagosCreateRequest = {
  // Pagos
  data: {
    monto: -2147483648,
    fechaPago: new Date('1970-01-01').toISOString().split('T')[0];,
    ventaProducto: 1,
  },
};

apiInstance.apipagosCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Pagos**|  |


### Return type

**Pagos**

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

# **apipagosDelete**
> void apipagosDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApipagosApi(configuration);

let body:.ApipagosApiApipagosDeleteRequest = {
  // number | A unique integer value identifying this pagos.
  id: 1,
};

apiInstance.apipagosDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this pagos. | defaults to undefined


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

# **apipagosList**
> Array<Pagos> apipagosList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApipagosApi(configuration);

let body:any = {};

apiInstance.apipagosList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Pagos>**

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

# **apipagosPartialUpdate**
> Pagos apipagosPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApipagosApi(configuration);

let body:.ApipagosApiApipagosPartialUpdateRequest = {
  // number | A unique integer value identifying this pagos.
  id: 1,
  // Pagos
  data: {
    monto: -2147483648,
    fechaPago: new Date('1970-01-01').toISOString().split('T')[0];,
    ventaProducto: 1,
  },
};

apiInstance.apipagosPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Pagos**|  |
 **id** | [**number**] | A unique integer value identifying this pagos. | defaults to undefined


### Return type

**Pagos**

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

# **apipagosRead**
> Pagos apipagosRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApipagosApi(configuration);

let body:.ApipagosApiApipagosReadRequest = {
  // number | A unique integer value identifying this pagos.
  id: 1,
};

apiInstance.apipagosRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this pagos. | defaults to undefined


### Return type

**Pagos**

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

# **apipagosUpdate**
> Pagos apipagosUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApipagosApi(configuration);

let body:.ApipagosApiApipagosUpdateRequest = {
  // number | A unique integer value identifying this pagos.
  id: 1,
  // Pagos
  data: {
    monto: -2147483648,
    fechaPago: new Date('1970-01-01').toISOString().split('T')[0];,
    ventaProducto: 1,
  },
};

apiInstance.apipagosUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Pagos**|  |
 **id** | [**number**] | A unique integer value identifying this pagos. | defaults to undefined


### Return type

**Pagos**

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


