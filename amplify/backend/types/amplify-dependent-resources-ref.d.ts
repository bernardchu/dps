export type AmplifyDependentResourcesAttributes = {
    "storage": {
        "available": {
            "Name": "string",
            "Arn": "string",
            "StreamArn": "string",
            "PartitionKeyName": "string",
            "PartitionKeyType": "string",
            "Region": "string"
        }
    },
    "function": {
        "getAvailable": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "syncAvailable": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "available": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}