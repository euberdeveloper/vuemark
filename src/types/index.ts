import type MarkdownIt from 'markdown-it';

/** An item containing a simple markdown-it plugin. It is used when the plugin does not have options or params. */
export interface VueMarkPluginSimpleItem {
  /** The type of plugin description, inherited by the parent interface. Always 'simple'. */
  type: 'simple';
  /** The markdown-it simple plugin to be used. */
  plugin: MarkdownIt.PluginSimple;
}
/** An item containing an optioned markdown-it plugin. It is used when the plugin has option parameters. */
export interface VueMarkPluginWithOptionsItem<T> {
  /** The type of plugin description, inherited by the parent interface. Always 'with-options'. */
  type: 'with-options';
  /** The markdown-it plugin to be used. */
  plugin: MarkdownIt.PluginWithOptions<T>;
  /** The options to pass to the plugin. */
  options: T;
}
/** An item containing a parameterized markdown-it plugin. It is used when the plugin has parameters. */
export interface VueMarkPluginWithParamsItem {
  /** The type of plugin description, inherited by the parent interface. Always 'with-params'. */
  type: 'with-params';
  /** The markdown-it plugin to be used. */
  plugin: MarkdownIt.PluginWithParams;
  /** The parameters to pass to the plugin. */
  params: any[];
}
/** A general interface for the items passed to describe the markdown-it plugins that are to be added to VueMark */
export type VueMarkPluginItem =
  | VueMarkPluginSimpleItem
  | VueMarkPluginWithOptionsItem<any>
  | VueMarkPluginWithParamsItem;

/** The options that will be passed to markdown-it. They are the standard markdown-it options. */
export type VueMarkOptions = MarkdownIt.Options;
