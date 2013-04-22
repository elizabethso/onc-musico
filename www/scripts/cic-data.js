var CicData =
[
	{
		id: "government_agency",
		name: "Government Agency",
		data: {
			$type: "circle"
		},
		adjacencies:
		[
			{
				nodeFrom: "government_agency",
				nodeTo: "ambulatory_care_setting",
				data:
				{
					//hidden: true,
					html: '<h2>Example 1:</h2>		<a href="#" onClick="ddaccordion.expandone("initiatives", 0); return false">Expand 1st header</a> | <a href="#" onClick="ddaccordion.collapseone("initiatives", 0); return false">Collapse 1st header</a> | <a href="#" onClick="ddaccordion.toggleone("initiatives", 1); return false">Toggle 2nd header</a>	<h3 class="initiatives">Initiative X</h3>		<div class="the_initiative">		<img src="images/OBC.png" />		This initiative blah blah blah</div>'
				}
			},
			{
				nodeFrom: "government_agency",
				nodeTo: "epidemiology_public_health_repositories",
				data:
				{
					info:
					[
						{
							link: "about:blank",
							text: "Public Health Reporting"
						}
					],
					weight: 1.0
				}
			},
			{
				nodeFrom: "government_agency",
				nodeTo: "hie_hih",
				data:
				{
					hidden: true
				}
			},
			{
				nodeFrom: "government_agency",
				nodeTo: "labs",
				data:
				{
					hidden: true
				}
			},
			{
				nodeFrom: "government_agency",
				nodeTo: "patient",
				data:
				{
					hidden: true
				}
			},
			{
				nodeFrom: "government_agency",
				nodeTo: "payer",
				data:
				{
					hidden: true
				}
			},
			{
				nodeFrom: "government_agency",
				nodeTo: "pharmacy",
				data:
				{
					hidden: true
				}
			},
			{
				nodeFrom: "government_agency",
				nodeTo: "primary_care_physician",
				data:
				{
					info:
					[
						{
							link: "about:blank",
							text: "Public Health Reporting"
						}
					],
					weight: 1.0
				}
			},
			{
				nodeFrom: "government_agency",
				nodeTo: "secondary_provider_specialist_or_hospital",
				data:
				{
					info:
					[
						{
							link: "about:blank",
							text: "Public Health Reporting"
						}
					],
					weight: 1.0
				}
			}
		]
	},
	{
		id: "ambulatory_care_setting",
		name: "Ambulatory Care Setting",
		adjacencies:
		[
			{
				nodeFrom: "ambulatory_care_setting",
				nodeTo: "epidemiology_public_health_repositories",
				data:
				{
					hidden: true
				}
			},
			{
				nodeFrom: "ambulatory_care_setting",
				nodeTo: "hie_hih",
				data:
				{
					hidden: true
				}
			},
			{
				nodeFrom: "ambulatory_care_setting",
				nodeTo: "labs",
				data:
				{
					hidden: true
				}
			},
			{
				nodeFrom: "ambulatory_care_setting",
				nodeTo: "patient",
				data:
				{
					weight: -1.0
				}
			},
			{
				nodeFrom: "ambulatory_care_setting",
				nodeTo: "payer",
				data:
				{
					weight: -1.0
				}
			},
			{
				nodeFrom: "ambulatory_care_setting",
				nodeTo: "pharmacy",
				data:
				{
					hidden: true
				}
			},
			{
				nodeFrom: "ambulatory_care_setting",
				nodeTo: "primary_care_physician",
				data:
				{
					weight: -1.0
				}
			},
			{
				nodeFrom: "ambulatory_care_setting",
				nodeTo: "secondary_provider_specialist_or_hospital",
				data:
				{
					weight: -1.0
				}
			}
		]
	},
	{
		id: "epidemiology_public_health_repositories",
		name: "Epidemiology / Public Health Repositories",
		adjacencies:
		[
			{
				nodeFrom: "epidemiology_public_health_repositories",
				nodeTo: "hie_hih",
				data:
				{
					weight: 1.0
				}
			},
			{
				nodeFrom: "epidemiology_public_health_repositories",
				nodeTo: "labs",
				data:
				{
					hidden: true
				}
			},
			{
				nodeFrom: "epidemiology_public_health_repositories",
				nodeTo: "patient",
				data:
				{
					hidden: true
				}
			},
			{
				nodeFrom: "epidemiology_public_health_repositories",
				nodeTo: "payer",
				data:
				{
					hidden: true
				}
			},
			{
				nodeFrom: "epidemiology_public_health_repositories",
				nodeTo: "pharmacy",
				data:
				{
					weight: -1.0
				}
			},
			{
				nodeFrom: "epidemiology_public_health_repositories",
				nodeTo: "primary_care_physician",
				data:
				{
					weight: 1.0
				}
			},
			{
				nodeFrom: "epidemiology_public_health_repositories",
				nodeTo: "secondary_provider_specialist_or_hospital",
				data:
				{
					weight: 1.0
				}
			}
		]
	},
	{
		id: "hie_hih",
		name: "HIE / HIH",
		adjacencies:
		[
			{
				nodeFrom: "hie_hih",
				nodeTo: "labs",
				data:
				{
					hidden: true
				}
			},
			{
				nodeFrom: "hie_hih",
				nodeTo: "patient",
				data:
				{
					hidden: true
				}
			},
			{
				nodeFrom: "hie_hih",
				nodeTo: "payer",
				data:
				{
					hidden: true
				}
			},
			{
				nodeFrom: "hie_hih",
				nodeTo: "pharmacy",
				data:
				{
					hidden: true
				}
			},
			{
				nodeFrom: "hie_hih",
				nodeTo: "primary_care_physician",
				data:
				{
					info:
					[
						{
							link: "content/data_seg.html",
							text: "Data Segmentation For Privacy"
						},
						{
							link: "about:blank",
							text: "Electronic Submission of Medical Documentation (esMD)"
						},
						{
							link: "about:blank",
							text: "Public Health Reporting"
						}
					],
					weight: 1.0
				}
			},
			{
				nodeFrom: "hie_hih",
				nodeTo: "secondary_provider_specialist_or_hospital",
				data:
				{
					info:
					[
						{
							link: "content/data_seg.html",
							text: "Data Segmentation For Privacy"
						},
						{
							link: "about:blank",
							text: "Electronic Submission of Medical Documentation (esMD)"
						},
						{
							link: "about:blank",
							text: "Public Health Reporting"
						}
					],
					weight: 1.0
				}
			}
		]
	},
	{
		id: "labs",
		name: "Labs",
		adjacencies:
		[
			{
				nodeFrom: "labs",
				nodeTo: "patient",
				data:
				{
					hidden: true
				}
			},
			{
				nodeFrom: "labs",
				nodeTo: "payer",
				data:
				{
					weight: -1.0
				}
			},
			{
				nodeFrom: "labs",
				nodeTo: "pharmacy",
				data:
				{
					hidden: true
				}
			},
			{
				nodeFrom: "labs",
				nodeTo: "primary_care_physician",
				data:
				{
					info:
					[
						{
							link: "about:blank",
							text: "Laboratory Orders Interface"
						},
						{
							link: "about:blank",
							text: "Laboratory Results Interface"
						}
					],
					weight: 1.0
				}
			},
			{
				nodeFrom: "labs",
				nodeTo: "secondary_provider_specialist_or_hospital",
				data:
				{
					info:
					[
						{
							link: "about:blank",
							text: "Laboratory Orders Interface"
						},
						{
							link: "about:blank",
							text: "Laboratory Results Interface"
						}
					],
					weight: 1.0
				}
			}
		]
	},
	{
		id: "patient",
		name: "Patient",
		adjacencies:
		[
			{
				nodeFrom: "patient",
				nodeTo: "payer",
				data:
				{
					weight: -1.0
				}
			},
			{
				nodeFrom: "patient",
				nodeTo: "pharmacy",
				data:
				{
					weight: -1.0
				}
			},
			{
				nodeFrom: "patient",
				nodeTo: "primary_care_physician",
				data:
				{
					weight: -1.0
				}
			},
			{
				nodeFrom: "patient",
				nodeTo: "secondary_provider_specialist_or_hospital",
				data:
				{
					weight: -1.0
				}
			}
		]
	},
	{
		id: "payer",
		name: "Payer",
		adjacencies:
		[
			{
				nodeFrom: "payer",
				nodeTo: "pharmacy",
				data:
				{
					hidden: true
				}
			},
			{
				nodeFrom: "payer",
				nodeTo: "primary_care_physician",
				data:
				{
					info:
					[
						{
							link: "about:blank",
							text: "Electronic Submission of Medical Documentation (esMD)"
						}
					],
					weight: 1.0
				}
			},
			{
				nodeFrom: "payer",
				nodeTo: "secondary_provider_specialist_or_hospital",
				data:
				{
					info:
					[
						{
							link: "about:blank",
							text: "Electronic Submission of Medical Documentation (esMD)"
						}
					],
					weight: 1.0
				}
			}
		]
	},
	{
		id: "pharmacy",
		name: "Pharmacy",
		adjacencies:
		[
			{
				nodeFrom: "pharmacy",
				nodeTo: "primary_care_physician",
				data:
				{
					weight: -1.0
				}
			},
			{
				nodeFrom: "pharmacy",
				nodeTo: "secondary_provider_specialist_or_hospital",
				data:
				{
					weight: -1.0
				}
			},
		]
	},
	{
		id: "primary_care_physician",
		name: "Primary Care Physician",
		adjacencies:
		[
			{
				nodeFrom: "primary_care_physician",
				nodeTo: "secondary_provider_specialist_or_hospital",
				data:
				{
					info:
					[
						{
							link: "about:blank",
							text: "Data Segmentation For Privacy"
						},
						{
							link: "about:blank",
							text: "Transitions of Care"
						},
						{
							link: "about:blank",
							text: "Longitudinal Coordination of Care"
						}
					],
					weight: 1.0
				}
			}
		]
	},
	{
		id: "secondary_provider_specialist_or_hospital",
		name: "Secondary Provider / Specialist or Hospital"
	}
];