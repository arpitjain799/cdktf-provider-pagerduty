// https://www.terraform.io/docs/providers/pagerduty/d/user_contact_method.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPagerdutyUserContactMethodConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the contact method to find in the PagerDuty API
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/user_contact_method.html#label DataPagerdutyUserContactMethod#label}
  */
  readonly label: string;
  /**
  * The type of the contact method
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/user_contact_method.html#type DataPagerdutyUserContactMethod#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/user_contact_method.html#user_id DataPagerdutyUserContactMethod#user_id}
  */
  readonly userId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/d/user_contact_method.html pagerduty_user_contact_method}
*/
export class DataPagerdutyUserContactMethod extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "pagerduty_user_contact_method";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty/d/user_contact_method.html pagerduty_user_contact_method} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPagerdutyUserContactMethodConfig
  */
  public constructor(scope: Construct, id: string, config: DataPagerdutyUserContactMethodConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_user_contact_method',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._label = config.label;
    this._type = config.type;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      label: cdktf.stringToTerraform(this._label),
      type: cdktf.stringToTerraform(this._type),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }
}
