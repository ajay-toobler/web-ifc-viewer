/**
 * [https://standards.buildingsmart.org/IFC/RELEASE/IFC4_1/FINAL/HTML/schema/ifcproductextension/lexical/ifcsite.htm]
 */

import {
  baseConstructorNoExtraction,
  registerConstructorByType,
} from "../../ifc-utils/ifc-constructors";
import { ifcTypes as t } from "../../ifc-utils/ifc-types";
import { IfcSpatialStructureElement } from "../ifc-base-classes/IfcSpatialStructureElement";

class IfcSite extends IfcSpatialStructureElement {
  getIfcProperties() {
    super.getIfcProperties();
    this.refLatitude = this.extractNumberSet();
    this.refLongitude = this.extractNumberSet();
    this.refElevation = this.extractNumber();
    this.landTitleNumber = this.extractText();
    this.siteAddress = this.extractId();
  }
}

function getIfcSite(caller, ifcLine) {
  return baseConstructorNoExtraction(caller, IfcSite, ifcLine);
}

registerConstructorByType(t.ifcSite, getIfcSite);

export { getIfcSite };