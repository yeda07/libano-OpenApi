# .ApicomprasTelasColoresApi

All URIs are relative to *https://tapiceria-7efd4dfba1d5.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apicomprasTelasColoresCreate**](ApicomprasTelasColoresApi.md#apicomprasTelasColoresCreate) | **POST** /apicompras_telas_colores/ | 
[**apicomprasTelasColoresDelete**](ApicomprasTelasColoresApi.md#apicomprasTelasColoresDelete) | **DELETE** /apicompras_telas_colores/{id}/ | 
[**apicomprasTelasColoresList**](ApicomprasTelasColoresApi.md#apicomprasTelasColoresList) | **GET** /apicompras_telas_colores/ | 
[**apicomprasTelasColoresPartialUpdate**](ApicomprasTelasColoresApi.md#apicomprasTelasColoresPartialUpdate) | **PATCH** /apicompras_telas_colores/{id}/ | 
[**apicomprasTelasColoresRead**](ApicomprasTelasColoresApi.md#apicomprasTelasColoresRead) | **GET** /apicompras_telas_colores/{id}/ | 
[**apicomprasTelasColoresUpdate**](ApicomprasTelasColoresApi.md#apicomprasTelasColoresUpdate) | **PUT** /apicompras_telas_colores/{id}/ | 


# **apicomprasTelasColoresCreate**
> ComprasTelasColores apicomprasTelasColoresCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicomprasTelasColoresApi(configuration);

let body:.ApicomprasTelasColoresApiApicomprasTelasColoresCreateRequest = {
  // ComprasTelasColores
  data: {
    precio: -2147483648,
    cantidad: -2147483648,
    compra: 1,
    telaColor: 1,
  },
};

apiInstance.apicomprasTelasColoresCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **ComprasTelasColores**|  |


### Return type

**ComprasTelasColores**

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

# **apicomprasTelasColoresDelete**
> void apicomprasTelasColoresDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicomprasTelasColoresApi(configuration);

let body:.ApicomprasTelasColoresApiApicomprasTelasColoresDeleteRequest = {
  // number | A unique integer value identifying this compras telas colores.
  id: 1,
};

apiInstance.apicomprasTelasColoresDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this compras telas colores. | defaults to undefined


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

# **apicomprasTelasColoresList**
> Array<ComprasTelasColores> apicomprasTelasColoresList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicomprasTelasColoresApi(configuration);

let body:any = {};

apiInstance.apicomprasTelasColoresList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<ComprasTelasColores>**

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

# **apicomprasTelasColoresPartialUpdate**
> ComprasTelasColores apicomprasTelasColoresPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicomprasTelasColoresApi(configuration);

let body:.ApicomprasTelasColoresApiApicomprasTelasColoresPartialUpdateRequest = {
  // number | A unique integer value identifying this compras telas colores.
  id: 1,
  // ComprasTelasColores
  data: {
    precio: -2147483648,
    cantidad: -2147483648,
    compra: 1,
    telaColor: 1,
  },
};

apiInstance.apicomprasTelasColoresPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **ComprasTelasColores**|  |
 **id** | [**number**] | A unique integer value identifying this compras telas colores. | defaults to undefined


### Return type

**ComprasTelasColores**

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

# **apicomprasTelasColoresRead**
> ComprasTelasColores apicomprasTelasColoresRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicomprasTelasColoresApi(configuration);

let body:.ApicomprasTelasColoresApiApicomprasTelasColoresReadRequest = {
  // number | A unique integer value identifying this compras telas colores.
  id: 1,
};

apiInstance.apicomprasTelasColoresRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this compras telas colores. | defaults to undefined


### Return type

**ComprasTelasColores**

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

# **apicomprasTelasColoresUpdate**
> ComprasTelasColores apicomprasTelasColoresUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApicomprasTelasColoresApi(configuration);

let body:.ApicomprasTelasColoresApiApicomprasTelasColoresUpdateRequest = {
  // number | A unique integer value identifying this compras telas colores.
  id: 1,
  // ComprasTelasColores
  data: {
    precio: -2147483648,
    cantidad: -2147483648,
    compra: 1,
    telaColor: 1,
  },
};

apiInstance.apicomprasTelasColoresUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **ComprasTelasColores**|  |
 **id** | [**number**] | A unique integer value identifying this compras telas colores. | defaults to undefined


### Return type

**ComprasTelasColores**

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


