db.createCollection("gene", { 
	validator: { 
		$jsonSchema: { 
			bsonType: "object",
			required: [
				"gene_id",  
				"gene_strand",
				"gc_content",
				"organism_id", 
				"gene_type",
				"centisome_position",
				"evidence_reference",
				"schema_version"
			],
			oneOf: [
				{
					required: ["leftPosition", "rightPosition", "gene_sequence"]
				},
				{
					required: [ "fragments" ],
					not: { required: [ "gene_sequence" ] }
				}
			],
			properties: {
				"_id": {
					bsonType: "objectId",
					description: ""
				},
				"gene_id": {
					bsonType: "string",
					description: ""
				}, 
				"gene_name": {
					bsonType: "string",
					description: ""
				},
				"leftPosition": {
                    bsonType: "int"
                },
                "rightPosition": {
                    bsonType: "int"
                },
                "fragments": {
					bsonType: ["array"],
					uniqueItems: true,
					items:{
						bsonType: "object",
						required: [
							"leftPosition",
							"rightPosition",
							"strand"
						],
						properties:{
							"strand": {
								bsonType: "string",
								enum: ["reverse", "forward"],
								description: ""
							},
							"leftPosition": {
								bsonType: "int",
								description: ""
							},
							"rightPosition": {
								bsonType: "int",
								description: ""
							},
							"name": {
								bsonType: "string",
								description: ""
							},
							"bnumber": {
								bsonType: "string",
								description: ""
							},
							"synonyms": {
								bsonType: "array",
								uniqueItems: true,
								items: {
									bsonType: "string",
								},
								description: ""
							},
							"centisome_position": {
								bsonType: "double",
								description: ""
							}
                        }
					}
				},
				"gene_strand": {
					bsonType: "string",
					description: "",
					enum: ["forward", "reverse", null]
				},
				"gene_sequence": {
					bsonType: "string",
					description: "",
					pattern: "^[ATCGatcg]+$"
				},
				"gc_content": {
					bsonType: "double",
					description: ""
				},
				"gene_note": {
					bsonType: "string",
					description: ""
				},
				"gene_internal_comment": {
					bsonType: "string",
					description: ""
				},
				"organism_id": {
					bsonType: "string",
					description: ""
				},
				"gene_type": {
					bsonType: "string",
					description: "",
					enum: [
						"pseudo", 
						"phantom", 
						"gene", 
						"truncated"
					]
				},
				"centisome_position": {
					bsonType: "double",
					description: ""
				},
				"interrupted": {
					bsonType: "bool",
					description: ""
				},
				"multifun_direct_parents": {
					bsonType: "array",
					uniqueItems: true,
					items: {
						bsonType: "string",
					},
					description: ""
				},
				"synonyms": {
					bsonType: "array",
					uniqueItems: true,
					items: {
						bsonType: "string",
					},
					description: ""
				},
				"evidence_reference": {
					bsonType: "array",
					uniqueItems: true,
					items: {
						bsonType: "object",
						properties: {
							"publication_id": {
								bsonType: "string",
								description: ""
							},
							"source_id": {
								bsonType: "int",
								description: ""
							},
							"external_database_id": {
								bsonType: "string",
								description: ""
							}
						}
					}
				},
				"external_databases": {
					bsonType: ["array"],
					uniqueItems: true,
					items: {
						bsonType: "object",
						required: [
							"database_name",
							"database_url"
						],
						properties: {
							"database_name": {
								bsonType: "string",
								description: ""
							},
							"database_url": {
								bsonType: "string",
								description: ""
							},
							"object_id": {
								bsonType: "string",
								description: ""
							}
						}
					}
				},
				"products":{
					bsonType: ["array"],
					uniqueItems: true,
					items: {
						bsonType: "object",
						required: [
							"$ref",
							"$id"
						],
						properties: {
							"$ref": {
								bsonType: "string",
								description: ""
							},
							"$id": {
								bsonType: "string",
								description: ""
							}
						}
					}
				},
				"schema_version": {
					bsonType: "double",
					description: ""
				}
			},
			additionalProperties: false
		}
	},
	validationLevel: "strict",
	validationAction: "error"
})