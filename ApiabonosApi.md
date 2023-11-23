# .ApiabonosApi

All URIs are relative to *https://tapiceria-7efd4dfba1d5.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiabonosCreate**](ApiabonosApi.md#apiabonosCreate) | **POST** /apiabonos/ | 
[**apiabonosDelete**](ApiabonosApi.md#apiabonosDelete) | **DELETE** /apiabonos/{id}/ | 
[**apiabonosList**](ApiabonosApi.md#apiabonosList) | **GET** /apiabonos/ | 
[**apiabonosPartialUpdate**](ApiabonosApi.md#apiabonosPartialUpdate) | **PATCH** /apiabonos/{id}/ | 
[**apiabonosRead**](ApiabonosApi.md#apiabonosRead) | **GET** /apiabonos/{id}/ | 
[**apiabonosUpdate**](ApiabonosApi.md#apiabonosUpdate) | **PUT** /apiabonos/{id}/ | 


# **apiabonosCreate**
> Abonos apiabonosCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiabonosApi(configuration);

let body:.ApiabonosApiApiabonosCreateRequest = {
  // Abonos
  data: {
    monto: -2147483648,
    fechaAbono: new Date('1970-01-01').toISOString().split('T')[0];,
    credito: 1,
  },
};

apiInstance.apiabonosCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Abonos**|  |


### Return type

**Abonos**

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

# **apiabonosDelete**
> void apiabonosDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiabonosApi(configuration);

let body:.ApiabonosApiApiabonosDeleteRequest = {
  // number | A unique integer value identifying this abonos.
  id: 1,
};

apiInstance.apiabonosDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this abonos. | defaults to undefined


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

# **apiabonosList**
> Array<Abonos> apiabonosList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiabonosApi(configuration);

let body:any = {};

apiInstance.apiabonosList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Abonos>**

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

# **apiabonosPartialUpdate**
> Abonos apiabonosPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiabonosApi(configuration);

let body:.ApiabonosApiApiabonosPartialUpdateRequest = {
  // number | A unique integer value identifying this abonos.
  id: 1,
  // Abonos
  data: {
    monto: -2147483648,
    fechaAbono: new Date('1970-01-01').toISOString().split('T')[0];,
    credito: 1,
  },
};

apiInstance.apiabonosPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Abonos**|  |
 **id** | [**number**] | A unique integer value identifying this abonos. | defaults to undefined


### Return type

**Abonos**

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

# **apiabonosRead**
> Abonos apiabonosRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiabonosApi(configuration);

let body:.ApiabonosApiApiabonosReadRequest = {
  // number | A unique integer value identifying this abonos.
  id: 1,
};

apiInstance.apiabonosRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this abonos. | defaults to undefined


### Return type

**Abonos**

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

# **apiabonosUpdate**
> Abonos apiabonosUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiabonosApi(configuration);

let body:.ApiabonosApiApiabonosUpdateRequest = {
  // number | A unique integer value identifying this abonos.
  id: 1,
  // Abonos
  data: {
    monto: -2147483648,
    fechaAbono: new Date('1970-01-01').toISOString().split('T')[0];,
    credito: 1,
  },
};

apiInstance.apiabonosUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **Abonos**|  |
 **id** | [**number**] | A unique integer value identifying this abonos. | defaults to undefined


### Return type

**Abonos**

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


