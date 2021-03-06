/**
 * Package of map-related functionality.
 *
 * @module aims-map
 */

// Make classes available.
import MapClient from './lib/map-client';
export { MapClient };

import AbstractLegendBuilder from './lib/components/legend/abstract-legend-builder';
export { AbstractLegendBuilder };

import AbstractDynamicLayerStyleSelector from './lib/layers/dynamic/dynamic-layer-feature-styler';
export { AbstractDynamicLayerStyleSelector };

import {
  DynamicLayerFeatureSelector,
  AccumulatingDynamicLayersFeatureSelector,
  ToggleDynamicLayersFeatureSelector
} from "./lib/layers/dynamic/dynamic-layer-feature-selector";
export {
  DynamicLayerFeatureSelector,
  AccumulatingDynamicLayersFeatureSelector,
  ToggleDynamicLayersFeatureSelector
};

import DynamicLayerRenderer from './lib/layers/dynamic/dynamic-layer-renderer';
export { DynamicLayerRenderer };

import StaticLayersRenderManager from './lib/layers/static/static-layers-render-manager';
export { StaticLayersRenderManager };

// Include polyfills
import 'babel-polyfill';

// Include basic CSS
import './lib/styles/app.scss'

// Include basic CSS
import 'ol/ol.css'
