import React from 'react';
import './App.css';
import { BreadcrumbBeforeItemRenderEventArgs, BreadcrumbComponent, BreadcrumbItemDirective, BreadcrumbItemsDirective } from '@syncfusion/ej2-react-navigations';
import { ChipListComponent, ChipsDirective, ChipDirective } from '@syncfusion/ej2-react-buttons';

class App extends React.Component {

  addChipComponent(data : any) : JSX.Element{
    return(
      <ChipListComponent>
        <ChipsDirective>
          <ChipDirective text={data.text}></ChipDirective>
        </ChipsDirective>
      </ChipListComponent>
    );
  }

  appendIconClass(args : BreadcrumbBeforeItemRenderEventArgs){
    if(args.element) {
      args.element.classList.add('e-icon-right');
    }
  }
  disableBreadcrumbItem(args : BreadcrumbBeforeItemRenderEventArgs) {
    if(args.item.text !== 'Program Files') {
      args.item.disabled = true;
    }
  }

  render() {
    return (
    <BreadcrumbComponent beforeItemRender={this.disableBreadcrumbItem.bind(this)} 
    itemTemplate={this.addChipComponent.bind(this)}>
      <BreadcrumbItemsDirective>
      <BreadcrumbItemDirective text="Program Files" iconCss='e-bicons e-folder'></BreadcrumbItemDirective>
      <BreadcrumbItemDirective text="Commom Files" iconCss='e-bicons e-folder'></BreadcrumbItemDirective>
      <BreadcrumbItemDirective text="Services" iconCss='e-bicons e-folder'></BreadcrumbItemDirective>
      <BreadcrumbItemDirective text="Config.json" iconCss='e-bicons e-file'></BreadcrumbItemDirective>
      </BreadcrumbItemsDirective>
  </BreadcrumbComponent>
    );
  }
}
   

export default App;