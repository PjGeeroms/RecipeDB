export default function EditableRow($compile) {
  'ngInject';

  return {
    restrict: 'A',
    scope: {
      updateData: '&',
      model: '='
    },
    link: function(scope, element) {
      element.bind("click", function(){
        // Check if an editable row already exists
        var editableRow = angular.element('.editableRow');
        if (editableRow !== []) {
          editableRow.remove();
        }

        // Create a row
        var childNode = $compile(`<tr class="editableRow">
          <td colspan="7">
            <form class="form-horizontal">
              <div class="form-group">
                <label for="provider" class="col-sm-4 control-label">Provider</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="provider" placeholder="Provider" ng-model="model.provider"/>
                </div>
              </div>

              <div class="form-group">
                <label for="abonnement" class="col-sm-4 control-label">Abonnement</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="abonnement" placeholder="Abonnement" ng-model="model.abonnement" />
                </div>
              </div>

              <div class="form-group">
                <label for="bellen" class="col-sm-4 control-label">Belminuten</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="bellen" placeholder="Belminuten" ng-model="model.belminuten"/>
                </div>
              </div>

              <div class="form-group">
                <label for="sms" class="col-sm-4 control-label">Sms</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="sms" placeholder="Sms" ng-model="model.sms"/>
                </div>
              </div>

              <div class="form-group">
                <label for="data" class="col-sm-4 control-label">Data</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="data" placeholder="Data" ng-model="model.data"/>
                </div>
              </div>

              <div class="form-group">
                <label for="prijs" class="col-sm-4 control-label">Prijs</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="prijs" placeholder="Prijs" ng-model="model.prijs"/>
                </div>
              </div>

              <div class="form-group">
                <div class="col-sm-offset-4 col-sm-3">
                  <button type="submit" class="btn btn-warning editButton" ng-click="updateData({dataArg: model})">
                    <i class="ion-checkmark-round"></i>&nbsp;Save
                  </button>
                </div>
              </div>
            </form>
          </td>
        </tr>`)(scope);

        // Add editable row after current ro
        element.closest('tr').after(childNode);

        // Add the editableRow to a variable
        editableRow = angular.element('.editableRow');

        // Bind click event on save button to remove editableRow on click
        angular.element('.editButton').bind("click", function(){
          editableRow.remove();
        });
      });

    }
  };
}
