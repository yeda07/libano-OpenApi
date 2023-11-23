# .ApicreditosApi

All URIs are relative to *https://tapiceria-7efd4dfba1d5.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apicreditosCreate**](ApicreditosApi.md#apicreditosCreate) | **POST** /apicreditos/ | 
[**apicreditosDelete**](ApicreditosApi.md#apicreditosDelete) | **DELETE** /apicreditos/{id}/ | 
[**apicreditosList**](ApicreditosApi.md#apicreditosList) | **GET** /apicreditos/ | 
[**apicreditosPartialUpdate**](ApicreditosApi.md#apicreditosPartialUpdate) | **PATCH** /apicreditos/{id}/ | 
[**apicreditosRead**](ApicreditosApi.md#apicreditosRead) | **GET** /apicreditos/{id}/ | 
[**apicreditosUpdate**](ApicreditosApi.md#apicreditosUpdate) | **PUT** /apicreditos/{id}/ | 


# **apicreditosCreate**
> Creditos apicreditosCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicreditosApi(configuration);

let body:.ApicreditosApiApicreditosCreateRequest = {
  // Creditos
  data: {
    totalCredito: -2147483648,
    montoInicial: -2147483648,
    fechaCredito: new Date('1970-01-01').toISOString().split('T')[0];,
    usuario: 1,
  },
};

apiInstance.apicreditosCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Creditos**|  |


### Return type

**Creditos**

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

# **apicreditosDelete**
> void apicreditosDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicreditosApi(configuration);

let body:.ApicreditosApiApicreditosDeleteRequest = {
  // number | A unique integer value identifying this creditos.
  id: 1,
};

apiInstance.apicreditosDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this creditos. | defaults to undefined


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

# **apicreditosList**
> Array<Creditos> apicreditosList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicreditosApi(configuration);

let body:any = {};

apiInstance.apicreditosList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Creditos>**

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

# **apicreditosPartialUpdate**
> Creditos apicreditosPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicreditosApi(configuration);

let body:.ApicreditosApiApicreditosPartialUpdateRequest = {
  // number | A unique integer value identifying this creditos.
  id: 1,
  // Creditos
  data: {
    totalCredito: -2147483648,
    montoInicial: -2147483648,
    fechaCredito: new Date('1970-01-01').toISOString().split('T')[0];,
    usuario: 1,
  },
};

apiInstance.apicreditosPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Creditos**|  |
 **id** | [**number**] | A unique integer value identifying this creditos. | defaults to undefined


### Return type

**Creditos**

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

# **apicreditosRead**
> Creditos apicreditosRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicreditosApi(configuration);

let body:.ApicreditosApiApicreditosReadRequest = {
  // number | A unique integer value identifying this creditos.
  id: 1,
};

apiInstance.apicreditosRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this creditos. | defaults to undefined


### Return type

**Creditos**

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

# **apicreditosUpdate**
> Creditos apicreditosUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicreditosApi(configuration);

let body:.ApicreditosApiApicreditosUpdateRequest = {
  // number | A unique integer value identifying this creditos.
  id: 1,
  // Creditos
  data: {
    totalCredito: -2147483648,
    montoInicial: -2147483648,
    fechaCredito: new Date('1970-01-01').toISOString().split('T')[0];,
    usuario: 1,
  },
};

apiInstance.apicreditosUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Creditos**|  |
 **id** | [**number**] | A unique integer value identifying this creditos. | defaults to undefined


### Return type

**Creditos**

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


