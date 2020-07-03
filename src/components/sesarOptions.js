let options = [
    {
        selected: false,
        id: 0,
        title: "",
        key: "field",
        type: "both",
        message: "Name of institution",
        format: "none"
    },
    {
        selected: false,
        id: 1,
        title: "original_archive",
        key: "field",
        type: "text",
        message: "Name of institution",
        format: "one2one"
    },
    {
        selected: false,
        id: 2,
        title: "current_archive",
        key: "field",
        type: "text",
        format: "one2one"
    },
    {
        selected: false,
        id: 3,
        title: "platform_name",
        key: "field",
        type: "text",
        format: "one2one"
    },
    {
        selected: false,
        id: 4,
        title: "cruise_field_prgrm",
        key: "field",
        type: "text",
        message: "Name or identifier of the field program during which the sample was collected.",
        format: "one2one",
    },
    {
        selected: false,
        id: 5,
        title: "name",
        key: "field",
        type: "text",
        message: "The Name of the sample.",
        format: "one2one"
    },
    {
        selected: false,
        id: 6,
        title: "collection_method",
        key: "field",
        type: "text",
        message: "Method by which the sample was collected",
        format: "one2one"
    },
    {
        selected: false,
        id: 7,
        title: "collection_start_date",
        key: "field",
        type: "numbers",
        message: "Date when the sample was collected. The format is YYYY-MM-DDTHH:MM:SSZ",
        format: "one2one"
    },
    {
        selected: false,
        id: 8,
        title: "collection_end_date",
        key: "field",
        type: "numbers",
        message: "Date when the sample collection was finished",
        format: "one2one"
    },
    {
        selected: false,
        id: 9,
        title: "latitude",
        key: "numbers",
        message: "Latitude of the location where the sample was collected. (Start latitude for linear sampling features)",
        format: "one2one"
    },
    {
        selected: false,
        id: 10,
        title: "latitude_end",
        key: "numbers",
        message: "End latitude of the location where the sample was collected (WGS84)",
        format: "one2one"
    },
    {
        selected: false,
        id: 11,
        title: "longitude",
        key: "numbers",
        message: "Longitude of the location where the sample was collected. (Start longitude for linear sampling features)",
        format: "one2one"
    },
    {
        selected: false,
        id: 12,
        title: "longitude_end",
        key: "numbers",
        message: "End longitude of the location where the sample was collected (WGS84)",
        format: "one2one"
    },
    {
        selected: false,
        id: 13,
        title: "elevation",
        key: "numbers",
        message: "Elevation at which a sample was collected (in meters). Use negative values for depth below sea level",
        format: "one2one"
    },
    {
        selected: false,
        id: 14,
        title: "elevation_end",
        key: "numbers",
        message: "End elevation at which a sample was collected",
        format: "one2one"
    },
    {
        selected: false,
        id: 15,
        title: "size",
        message: "Size of the registered object",
        type: "numbers",
        format: "two2oneMeasurement"
    },

    {
        selected: false,
        id: 17,
        title: "collector",
        key: "field",
        type: "text",
        message: "Name of the person who collected the sample or name of chief scientist for larger field programs",
        format: "one2one"
    },
    {
        selected: false,
        id: 18,
        title: "primary_location_type",
        key: "field",
        type: "text",
        message: "Physiographic feature or type of feture that your sample was collected from",
        format: "one2one"
    },
    {
        selected: false,
        id: 19,
        title: "igsn",
        key: "field",
        type: "numbers",
        message: "(AUTOMATIC) The 9-digit IGSN of the sample",
        format: "one2one"
    },
    {
        selected: false,
        id: 20,
        title: "sample_comment",
        key: "field",
        type: "text",
        message: "Any free 'text' comment about the sample",
        format: "multivalue"
    },
    {
        selected: false,
        id: 21,
        title: "latitude",
        type: "numbers",
        key: "field",
        format: "one2one"
    },
    {
        selected: false,
        id: 22,
        title: "description",
        type: "text",
        key: "field",
        format: "multivalue"
    },
    {
        selected: false,
        id: 23,
        title: "geological_age",
        key: "field",
        type: "numbers",
        message: "Age of a sample as described by the stratigraphic era",
        format: "multivalue"
    },
    {
        selected: false,
        id: 26,
        title: "classification",
        key: "field",
        type: "text",
        message: "Classification",
        format: "one2one"
    },
    {
        selected: false,
        id: 27,
        title: "sample_type",
        key: "field",
        type: "text",
        message: "The type of sample which comes from a SESAR controlled list",
        format: "one2one"
    },
    {
        selected: false,
        id: 28,
        title: "latitude_end",
        key: "field",
        type: "numbers",
        message: "Ending Longitude",
        format: "one2one"
    },
    {
        selected: false,
        id: 29,
        title: "longitude",
        key: "field",
        type: "numbers",
        message: "Longitude",
        format: "one2one"
    },
    {
        selected: false,
        id: 30,
        title: "longitude_end",
        key: "field",
        type: "numbers",
        message: "Ending Longitude",
        format: "one2one"
    },
    {
        selected: false,
        id: 31,
        title: "elevation",
        key: "field",
        type: "numbers",
        message: "Water Depth",
        format: "one2one"
    },
    {
        selected: false,
        id: 32,
        title: "elevation_end",
        key: "field",
        type: "numbers",
        message: "Ending Water Depth",
        format: "one2one"
    },
    {
        selected: false,
        id: 32,
        title: "field_name",
        key: "field",
        type: "text",
        message: "Keyed List / Order Pair of Values (Ex: [FACILITY CODE: MARS])",
        format: "multivalue"
    }

]

module.exports = { options };