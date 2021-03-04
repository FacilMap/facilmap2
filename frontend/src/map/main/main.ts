import WithRender from "./main.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Client from 'facilmap-client';
import LeafletMap from '../leaflet-map/leaflet-map';
import "./main.scss";
import { InjectClient } from "../client/client";
import Toolbox from "../toolbox/toolbox";
import context from "../context";
import SearchBox from "../search-box/search-box";

@WithRender
@Component({
    components: { LeafletMap, SearchBox, Toolbox }
})
export default class Main extends Vue {

    @InjectClient() client!: Client;

    context = context;

}