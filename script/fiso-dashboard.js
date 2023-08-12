var KTDatatableJsonRemoteFisoDashboard = (function () {
  // Private functions

  var fisoDashboard = function () {
    var HOST_URL =
      "https://raw.githubusercontent.com/DCOneCrypto/DCOne-Crypto-Pool/main";
    var datatable = $("#kt_datatable_fisodashboard").KTDatatable({
      // datasource definition
      data: {
        type: "remote",
        source: {
          read: {
            url: HOST_URL + "/snapshot/full-epoch.json",
            method: "GET",
            map: function (raw) {
              var dataSet = raw;
              if (typeof raw.data !== "undefined") {
                dataSet = raw.data;
              }
              return dataSet;
            },
          },
        },
        pageSize: 10,
      },

      // layout definition
      layout: {
        scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
        footer: false, // display/hide footer
      },

      // column sorting
      sortable: true,

      pagination: true,

      search: {
        input: $("#kt_datatable_fisodashboard_search_query"),
        key: "generalSearch",
      },

      // columns definition
      columns: [
        {
          field: "stake_address",
          title: "Stake Address",
        },
        {
          field: "amount",
          title: "Amount $ADA",
          textAlign: "center",
        },
        {
          field: "epoch_no",
          title: "Epoch",
          sortable: "asc",
          type: "number",
          selector: false,
          textAlign: "center",
          // callback function support for column rendering
          template: function (row) {
            return (
              '<span class="font-weight-bold text-primary">' +
              row.epoch_no +
              "</span>"
            );
          },
        },
      ],
    });
  };

  return {
    // public functions
    init: function () {
      fisoDashboard();
    },
  };
})();

jQuery(document).ready(function () {
  KTDatatableJsonRemoteFisoDashboard.init();
});
