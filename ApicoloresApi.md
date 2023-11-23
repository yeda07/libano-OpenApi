# .ApicoloresApi

All URIs are relative to *https://tapiceria-7efd4dfba1d5.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apicoloresCreate**](ApicoloresApi.md#apicoloresCreate) | **POST** /apicolores/ | 
[**apicoloresDelete**](ApicoloresApi.md#apicoloresDelete) | **DELETE** /apicolores/{id}/ | 
[**apicoloresList**](ApicoloresApi.md#apicoloresList) | **GET** /apicolores/ | 
[**apicoloresPartialUpdate**](ApicoloresApi.md#apicoloresPartialUpdate) | **PATCH** /apicolores/{id}/ | 
[**apicoloresRead**](ApicoloresApi.md#apicoloresRead) | **GET** /apicolores/{id}/ | 
[**apicoloresUpdate**](ApicoloresApi.md#apicoloresUpdate) | **PUT** /apicolores/{id}/ | 


# **apicoloresCreate**
> Colores apicoloresCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicoloresApi(configuration);

let body:.ApicoloresApiApicoloresCreateRequest = {
  // Colores
  data: {
    nombre: "nombre_example",
  },
};

apiInstance.apicoloresCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Colores**|  |


### Return type

**Colores**

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

# **apicoloresDelete**
> void apicoloresDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicoloresApi(configuration);

let body:.ApicoloresApiApicoloresDeleteRequest = {
  // number | A unique integer value identifying this colores.
  id: 1,
};

apiInstance.apicoloresDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this colores. | defaults to undefined


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

# **apicoloresList**
> Array<Colores> apicoloresList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicoloresApi(configuration);

let body:any = {};

apiInstance.apicoloresList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Colores>**

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

# **apicoloresPartialUpdate**
> Colores apicoloresPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicoloresApi(configuration);

let body:.ApicoloresApiApicoloresPartialUpdateRequest = {
  // number | A unique integer value identifying this colores.
  id: 1,
  // Colores
  data: {
    nombre: "nombre_example",
  },
};

apiInstance.apicoloresPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Colores**|  |
 **id** | [**number**] | A unique integer value identifying this colores. | defaults to undefined


### Return type

**Colores**

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

# **apicoloresRead**
> Colores apicoloresRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicoloresApi(configuration);

let body:.ApicoloresApiApicoloresReadRequest = {
  // number | A unique integer value identifying this colores.
  id: 1,
};

apiInstance.apicoloresRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this colores. | defaults to undefined


### Return type

**Colores**

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

# **apicoloresUpdate**
> Colores apicoloresUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicoloresApi(configuration);

let body:.ApicoloresApiApicoloresUpdateRequest = {
  // number | A unique integer value identifying this colores.
  id: 1,
  // Colores
  data: {
    nombre: "nombre_example",
  },
};

apiInstance.apicoloresUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Colores**|  |
 **id** | [**number**] | A unique integer value identifying this colores. | defaults to undefined


### Return type

**Colores**

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


