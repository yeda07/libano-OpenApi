# .ApidetallesNoTapizadosApi

All URIs are relative to *https://tapiceria-7efd4dfba1d5.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apidetallesNoTapizadosCreate**](ApidetallesNoTapizadosApi.md#apidetallesNoTapizadosCreate) | **POST** /apidetallesNoTapizados/ | 
[**apidetallesNoTapizadosDelete**](ApidetallesNoTapizadosApi.md#apidetallesNoTapizadosDelete) | **DELETE** /apidetallesNoTapizados/{id}/ | 
[**apidetallesNoTapizadosList**](ApidetallesNoTapizadosApi.md#apidetallesNoTapizadosList) | **GET** /apidetallesNoTapizados/ | 
[**apidetallesNoTapizadosPartialUpdate**](ApidetallesNoTapizadosApi.md#apidetallesNoTapizadosPartialUpdate) | **PATCH** /apidetallesNoTapizados/{id}/ | 
[**apidetallesNoTapizadosRead**](ApidetallesNoTapizadosApi.md#apidetallesNoTapizadosRead) | **GET** /apidetallesNoTapizados/{id}/ | 
[**apidetallesNoTapizadosUpdate**](ApidetallesNoTapizadosApi.md#apidetallesNoTapizadosUpdate) | **PUT** /apidetallesNoTapizados/{id}/ | 


# **apidetallesNoTapizadosCreate**
> DetallesNoTapizados apidetallesNoTapizadosCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApidetallesNoTapizadosApi(configuration);

let body:.ApidetallesNoTapizadosApiApidetallesNoTapizadosCreateRequest = {
  // DetallesNoTapizados
  data: {
    color: 1,
    producto: 1,
  },
};

apiInstance.apidetallesNoTapizadosCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **DetallesNoTapizados**|  |


### Return type

**DetallesNoTapizados**

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

# **apidetallesNoTapizadosDelete**
> void apidetallesNoTapizadosDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApidetallesNoTapizadosApi(configuration);

let body:.ApidetallesNoTapizadosApiApidetallesNoTapizadosDeleteRequest = {
  // number | A unique integer value identifying this detalles no tapizados.
  id: 1,
};

apiInstance.apidetallesNoTapizadosDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this detalles no tapizados. | defaults to undefined


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

# **apidetallesNoTapizadosList**
> Array<DetallesNoTapizados> apidetallesNoTapizadosList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApidetallesNoTapizadosApi(configuration);

let body:any = {};

apiInstance.apidetallesNoTapizadosList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<DetallesNoTapizados>**

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

# **apidetallesNoTapizadosPartialUpdate**
> DetallesNoTapizados apidetallesNoTapizadosPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApidetallesNoTapizadosApi(configuration);

let body:.ApidetallesNoTapizadosApiApidetallesNoTapizadosPartialUpdateRequest = {
  // number | A unique integer value identifying this detalles no tapizados.
  id: 1,
  // DetallesNoTapizados
  data: {
    color: 1,
    producto: 1,
  },
};

apiInstance.apidetallesNoTapizadosPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **DetallesNoTapizados**|  |
 **id** | [**number**] | A unique integer value identifying this detalles no tapizados. | defaults to undefined


### Return type

**DetallesNoTapizados**

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

# **apidetallesNoTapizadosRead**
> DetallesNoTapizados apidetallesNoTapizadosRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApidetallesNoTapizadosApi(configuration);

let body:.ApidetallesNoTapizadosApiApidetallesNoTapizadosReadRequest = {
  // number | A unique integer value identifying this detalles no tapizados.
  id: 1,
};

apiInstance.apidetallesNoTapizadosRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this detalles no tapizados. | defaults to undefined


### Return type

**DetallesNoTapizados**

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

# **apidetallesNoTapizadosUpdate**
> DetallesNoTapizados apidetallesNoTapizadosUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApidetallesNoTapizadosApi(configuration);

let body:.ApidetallesNoTapizadosApiApidetallesNoTapizadosUpdateRequest = {
  // number | A unique integer value identifying this detalles no tapizados.
  id: 1,
  // DetallesNoTapizados
  data: {
    color: 1,
    producto: 1,
  },
};

apiInstance.apidetallesNoTapizadosUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **DetallesNoTapizados**|  |
 **id** | [**number**] | A unique integer value identifying this detalles no tapizados. | defaults to undefined


### Return type

**DetallesNoTapizados**

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


