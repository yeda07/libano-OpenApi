# .ApiventasApi

All URIs are relative to *https://tapiceria-7efd4dfba1d5.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiventasCreate**](ApiventasApi.md#apiventasCreate) | **POST** /apiventas/ | 
[**apiventasDelete**](ApiventasApi.md#apiventasDelete) | **DELETE** /apiventas/{id}/ | 
[**apiventasList**](ApiventasApi.md#apiventasList) | **GET** /apiventas/ | 
[**apiventasPartialUpdate**](ApiventasApi.md#apiventasPartialUpdate) | **PATCH** /apiventas/{id}/ | 
[**apiventasRead**](ApiventasApi.md#apiventasRead) | **GET** /apiventas/{id}/ | 
[**apiventasUpdate**](ApiventasApi.md#apiventasUpdate) | **PUT** /apiventas/{id}/ | 


# **apiventasCreate**
> Ventas apiventasCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiventasApi(configuration);

let body:.ApiventasApiApiventasCreateRequest = {
  // Ventas
  data: {
    fechaVenta: new Date('1970-01-01').toISOString().split('T')[0];,
    comprador: 1,
    vendedor: 1,
  },
};

apiInstance.apiventasCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Ventas**|  |


### Return type

**Ventas**

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

# **apiventasDelete**
> void apiventasDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiventasApi(configuration);

let body:.ApiventasApiApiventasDeleteRequest = {
  // number | A unique integer value identifying this ventas.
  id: 1,
};

apiInstance.apiventasDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this ventas. | defaults to undefined


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

# **apiventasList**
> Array<Ventas> apiventasList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiventasApi(configuration);

let body:any = {};

apiInstance.apiventasList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Ventas>**

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

# **apiventasPartialUpdate**
> Ventas apiventasPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiventasApi(configuration);

let body:.ApiventasApiApiventasPartialUpdateRequest = {
  // number | A unique integer value identifying this ventas.
  id: 1,
  // Ventas
  data: {
    fechaVenta: new Date('1970-01-01').toISOString().split('T')[0];,
    comprador: 1,
    vendedor: 1,
  },
};

apiInstance.apiventasPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Ventas**|  |
 **id** | [**number**] | A unique integer value identifying this ventas. | defaults to undefined


### Return type

**Ventas**

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

# **apiventasRead**
> Ventas apiventasRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiventasApi(configuration);

let body:.ApiventasApiApiventasReadRequest = {
  // number | A unique integer value identifying this ventas.
  id: 1,
};

apiInstance.apiventasRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this ventas. | defaults to undefined


### Return type

**Ventas**

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

# **apiventasUpdate**
> Ventas apiventasUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiventasApi(configuration);

let body:.ApiventasApiApiventasUpdateRequest = {
  // number | A unique integer value identifying this ventas.
  id: 1,
  // Ventas
  data: {
    fechaVenta: new Date('1970-01-01').toISOString().split('T')[0];,
    comprador: 1,
    vendedor: 1,
  },
};

apiInstance.apiventasUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Ventas**|  |
 **id** | [**number**] | A unique integer value identifying this ventas. | defaults to undefined


### Return type

**Ventas**

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


