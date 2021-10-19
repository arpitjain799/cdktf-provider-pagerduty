// https://www.terraform.io/docs/providers/pagerduty/r/response_play.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResponsePlayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#conference_number ResponsePlay#conference_number}
  */
  readonly conferenceNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#conference_url ResponsePlay#conference_url}
  */
  readonly conferenceUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#description ResponsePlay#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#from ResponsePlay#from}
  */
  readonly from: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#name ResponsePlay#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#responders_message ResponsePlay#responders_message}
  */
  readonly respondersMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#runnability ResponsePlay#runnability}
  */
  readonly runnability?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#subscribers_message ResponsePlay#subscribers_message}
  */
  readonly subscribersMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#team ResponsePlay#team}
  */
  readonly team?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#type ResponsePlay#type}
  */
  readonly type?: string;
  /**
  * responder block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#responder ResponsePlay#responder}
  */
  readonly responder?: ResponsePlayResponder[];
  /**
  * subscriber block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#subscriber ResponsePlay#subscriber}
  */
  readonly subscriber?: ResponsePlaySubscriber[];
}
export interface ResponsePlayResponder {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#description ResponsePlay#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#id ResponsePlay#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#name ResponsePlay#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#type ResponsePlay#type}
  */
  readonly type?: string;
}

function responsePlayResponderToTerraform(struct?: ResponsePlayResponder): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ResponsePlaySubscriber {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#id ResponsePlay#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#type ResponsePlay#type}
  */
  readonly type?: string;
}

function responsePlaySubscriberToTerraform(struct?: ResponsePlaySubscriber): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html pagerduty_response_play}
*/
export class ResponsePlay extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "pagerduty_response_play";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html pagerduty_response_play} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResponsePlayConfig
  */
  public constructor(scope: Construct, id: string, config: ResponsePlayConfig) {
    super(scope, id, {
      terraformResourceType: 'pagerduty_response_play',
      terraformGeneratorMetadata: {
        providerName: 'pagerduty'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._conferenceNumber = config.conferenceNumber;
    this._conferenceUrl = config.conferenceUrl;
    this._description = config.description;
    this._from = config.from;
    this._name = config.name;
    this._respondersMessage = config.respondersMessage;
    this._runnability = config.runnability;
    this._subscribersMessage = config.subscribersMessage;
    this._team = config.team;
    this._type = config.type;
    this._responder = config.responder;
    this._subscriber = config.subscriber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // conference_number - computed: false, optional: true, required: false
  private _conferenceNumber?: string | undefined; 
  public get conferenceNumber() {
    return this.getStringAttribute('conference_number');
  }
  public set conferenceNumber(value: string | undefined) {
    this._conferenceNumber = value;
  }
  public resetConferenceNumber() {
    this._conferenceNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conferenceNumberInput() {
    return this._conferenceNumber
  }

  // conference_url - computed: false, optional: true, required: false
  private _conferenceUrl?: string | undefined; 
  public get conferenceUrl() {
    return this.getStringAttribute('conference_url');
  }
  public set conferenceUrl(value: string | undefined) {
    this._conferenceUrl = value;
  }
  public resetConferenceUrl() {
    this._conferenceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conferenceUrlInput() {
    return this._conferenceUrl
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // from - computed: false, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // responders_message - computed: false, optional: true, required: false
  private _respondersMessage?: string | undefined; 
  public get respondersMessage() {
    return this.getStringAttribute('responders_message');
  }
  public set respondersMessage(value: string | undefined) {
    this._respondersMessage = value;
  }
  public resetRespondersMessage() {
    this._respondersMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respondersMessageInput() {
    return this._respondersMessage
  }

  // runnability - computed: false, optional: true, required: false
  private _runnability?: string | undefined; 
  public get runnability() {
    return this.getStringAttribute('runnability');
  }
  public set runnability(value: string | undefined) {
    this._runnability = value;
  }
  public resetRunnability() {
    this._runnability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runnabilityInput() {
    return this._runnability
  }

  // subscribers_message - computed: false, optional: true, required: false
  private _subscribersMessage?: string | undefined; 
  public get subscribersMessage() {
    return this.getStringAttribute('subscribers_message');
  }
  public set subscribersMessage(value: string | undefined) {
    this._subscribersMessage = value;
  }
  public resetSubscribersMessage() {
    this._subscribersMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribersMessageInput() {
    return this._subscribersMessage
  }

  // team - computed: false, optional: true, required: false
  private _team?: string | undefined; 
  public get team() {
    return this.getStringAttribute('team');
  }
  public set team(value: string | undefined) {
    this._team = value;
  }
  public resetTeam() {
    this._team = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team
  }

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // responder - computed: false, optional: true, required: false
  private _responder?: ResponsePlayResponder[] | undefined; 
  public get responder() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('responder') as any;
  }
  public set responder(value: ResponsePlayResponder[] | undefined) {
    this._responder = value;
  }
  public resetResponder() {
    this._responder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responderInput() {
    return this._responder
  }

  // subscriber - computed: false, optional: true, required: false
  private _subscriber?: ResponsePlaySubscriber[] | undefined; 
  public get subscriber() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('subscriber') as any;
  }
  public set subscriber(value: ResponsePlaySubscriber[] | undefined) {
    this._subscriber = value;
  }
  public resetSubscriber() {
    this._subscriber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberInput() {
    return this._subscriber
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      conference_number: cdktf.stringToTerraform(this._conferenceNumber),
      conference_url: cdktf.stringToTerraform(this._conferenceUrl),
      description: cdktf.stringToTerraform(this._description),
      from: cdktf.stringToTerraform(this._from),
      name: cdktf.stringToTerraform(this._name),
      responders_message: cdktf.stringToTerraform(this._respondersMessage),
      runnability: cdktf.stringToTerraform(this._runnability),
      subscribers_message: cdktf.stringToTerraform(this._subscribersMessage),
      team: cdktf.stringToTerraform(this._team),
      type: cdktf.stringToTerraform(this._type),
      responder: cdktf.listMapper(responsePlayResponderToTerraform)(this._responder),
      subscriber: cdktf.listMapper(responsePlaySubscriberToTerraform)(this._subscriber),
    };
  }
}
