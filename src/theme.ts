import { theme } from './color'
import { getTokenColors } from './token'

export default function getTheme(isColor = false) {
  const name = isColor ? 'E-Ink Color' : 'E-Ink'
  const i = isColor ? 1 : 0
  const background = theme.background[i]
  const background2 = theme.background2[i]
  const background3 = theme.background3[i]
  const background4 = theme.background4[i]
  const foreground = theme.foreground[i]
  const foreground2 = theme.foreground2[i]
  const foreground3 = theme.foreground3[i]
  const shadow = theme.shadow[i]
  const border = theme.border[i]
  const border2 = theme.border2[i]
  const outline = theme.outline[i]
  const separator = theme.separator[i]
  const stroke = theme.stroke[i]
  const highlight = theme.highlight[i]
  const highlight2 = theme.highlight2[i]
  return {
    name,
    base: 'hc-light',
    $schema: 'vscode://schemas/color-theme',
    colors: {
      // https://code.visualstudio.com/api/references/theme-color

      // Contrast colors
      'contrastActiveBorder': border,
      'contrastBorder': border,

      // Base colors
      'focusBorder': border,
      'foreground': foreground,
      'widget.border': border,
      'widget.shadow': shadow,
      'selection.background': background2,
      'descriptionForeground': foreground,
      // errorForeground: error,
      'icon.foreground': foreground,
      'sash.hoverBorder': border,

      // Window border
      'window.activeBorder': border,
      'window.inactiveBorder': border,

      // Text colors
      'textBlockQuote.background': background,
      'textBlockQuote.border': border,
      'textCodeBlock.background': background,
      'textLink.foreground': foreground2,
      'textLink.activeForeground': foreground,
      'textPreformat.foreground': background,
      'textPreformat.background': background2,
      'textSeparator.foreground': foreground,

      // Action colors
      'toolbar.hoverBackground': background,
      'toolbar.hoverOutline': outline,
      'toolbar.activeBackground': background3,

      // Button control
      'button.background': background,
      'button.foreground': foreground,
      'button.border': border,
      'button.separator': separator,
      'button.hoverBackground': background2,
      // 'button.secondaryForeground': background,
      // 'button.secondaryBackground': background,
      // 'button.secondaryHoverBackground': background,
      'checkbox.background': background,
      'checkbox.foreground': foreground,
      'checkbox.border': border,
      'checkbox.selectBackground': background3,
      'checkbox.selectBorder': border,

      // Dropdown control
      'dropdown.background': background,
      'dropdown.border': border,
      'dropdown.foreground': foreground,
      'dropdown.listBackground': background,

      // Input control
      'input.background': background,
      'input.border': border,
      'input.foreground': foreground,
      'input.placeholderForeground': foreground2,
      'inputOption.activeBackground': background,
      'inputOption.activeBorder': border,
      'inputOption.activeForeground': foreground,
      'inputOption.hoverBackground': background,
      // 'inputValidation.errorBackground': background,
      // 'inputValidation.errorForeground': warn,
      // 'inputValidation.errorBorder': border,
      // 'inputValidation.infoBackground': background,
      // 'inputValidation.infoForeground': foreground,
      // 'inputValidation.infoBorder': border,
      // 'inputValidation.warningBackground': background,
      // 'inputValidation.warningForeground': foreground,
      // 'inputValidation.warningBorder': border,

      // Scrollbar control
      'scrollbar.shadow': shadow,
      'scrollbarSlider.activeBackground': background4,
      'scrollbarSlider.background': background2,
      'scrollbarSlider.hoverBackground': background4,

      // Badge
      'badge.foreground': foreground,
      'badge.background': background,

      // Progress bar
      'progressBar.background': background3,

      // Lists and trees
      'list.activeSelectionBackground': background,
      'list.activeSelectionForeground': foreground,
      'list.activeSelectionIconForeground': foreground,
      'list.dropBackground': background2,
      'list.focusBackground': background,
      'list.focusForeground': foreground,
      'list.focusHighlightForeground': foreground,
      'list.focusOutline': outline,
      'list.focusAndSelectionOutline': outline,
      'list.highlightForeground': foreground,
      'list.hoverBackground': background2,
      'list.hoverForeground': foreground,
      'list.inactiveSelectionBackground': background,
      'list.inactiveSelectionForeground': foreground,
      'list.inactiveSelectionIconForeground': foreground,
      'list.inactiveFocusBackground': background,
      'list.inactiveFocusOutline': outline,
      'list.invalidItemForeground': foreground,
      // 'list.errorForeground': error,
      // 'list.warningForeground': warn,
      'listFilterWidget.background': background,
      'listFilterWidget.outline': outline,
      'listFilterWidget.noMatchesOutline': outline,
      'listFilterWidget.shadow': shadow,
      'list.filterMatchBackground': background2,
      'list.filterMatchBorder': border,
      'list.deemphasizedForeground': foreground,
      'tree.indentGuidesStroke': stroke,
      'tree.inactiveIndentGuidesStroke': stroke,
      'tree.tableColumnsBorder': border,
      'tree.tableOddRowsBackground': background,

      // Activity Bar
      'activityBar.background': background,
      'activityBar.dropBorder': border,
      'activityBar.foreground': foreground,
      'activityBar.inactiveForeground': foreground,
      'activityBar.border': border,
      'activityBarBadge.background': background,
      'activityBarBadge.foreground': foreground,
      'activityBar.activeBorder': border,
      'activityBar.activeBackground': background,
      'activityBar.activeFocusBorder': border,

      // Profiles
      'profileBadge.background': background,
      'profileBadge.foreground': foreground,

      // Side Bar
      'sideBar.background': background,
      'sideBar.foreground': foreground,
      'sideBar.border': border,
      'sideBar.dropBackground': background2,
      'sideBarTitle.foreground': foreground,
      'sideBarSectionHeader.background': background,
      'sideBarSectionHeader.foreground': foreground,
      'sideBarSectionHeader.border': border,

      // Minimap
      // 'minimap.findMatchHighlight': '',
      // 'minimap.selectionHighlight': '',
      // 'minimap.errorHighlight': '',
      // 'minimap.warningHighlight': '',
      // 'minimap.background': '',
      // 'minimap.selectionOccurrenceHighlight': '',
      // 'minimap.foregroundOpacity': '',
      // 'minimap.infoHighlight': '',
      // 'minimapSlider.background': '',
      // 'minimapSlider.hoverBackground': '',
      // 'minimapSlider.activeBackground': '',
      // 'minimapGutter.addedBackground': '',
      // 'minimapGutter.modifiedBackground': '',
      // 'minimapGutter.deletedBackground': '',

      // Editor Groups & Tabs
      'editorGroup.border': border,
      'editorGroup.dropBackground': background2,
      'editorGroupHeader.noTabsBackground': background,
      'editorGroupHeader.tabsBackground': background,
      'editorGroupHeader.tabsBorder': border,
      'editorGroupHeader.border': border,
      'editorGroup.emptyBackground': background,
      'editorGroup.focusedEmptyBorder': border,
      'editorGroup.dropIntoPromptForeground': foreground,
      'editorGroup.dropIntoPromptBackground': background,
      'editorGroup.dropIntoPromptBorder': border,
      'tab.activeBackground': background,
      'tab.unfocusedActiveBackground': background,
      'tab.activeForeground': foreground,
      'tab.border': border,
      'tab.activeBorder': border,
      'tab.unfocusedActiveBorder': border,
      'tab.activeBorderTop': border,
      'tab.unfocusedActiveBorderTop': border,
      'tab.lastPinnedBorder': border,
      'tab.inactiveBackground': background,
      'tab.unfocusedInactiveBackground': background,
      'tab.inactiveForeground': foreground,
      'tab.unfocusedActiveForeground': foreground,
      'tab.unfocusedInactiveForeground': foreground,
      'tab.hoverBackground': background,
      'tab.unfocusedHoverBackground': background,
      'tab.hoverForeground': foreground,
      'tab.unfocusedHoverForeground': foreground,
      'tab.hoverBorder': border,
      'tab.unfocusedHoverBorder': border,
      'tab.activeModifiedBorder': border,
      'tab.inactiveModifiedBorder': border,
      'tab.unfocusedActiveModifiedBorder': border,
      'tab.unfocusedInactiveModifiedBorder': border,
      'editorPane.background': background,
      'sideBySideEditor.horizontalBorder': border,
      'sideBySideEditor.verticalBorder': border,

      // Editor colors
      'editor.background': background,
      'editor.foreground': foreground,
      'editorLineNumber.foreground': foreground,
      'editorLineNumber.activeForeground': foreground2,
      'editorLineNumber.dimmedForeground': foreground,
      'editorCursor.background': background,
      'editorCursor.foreground': foreground,
      'editor.selectionBackground': background2,
      'editor.selectionForeground': foreground,
      'editor.inactiveSelectionBackground': background2,
      // 'editor.selectionHighlightBackground': background2,
      // 'editor.selectionHighlightBorder': border,
      // 'editor.wordHighlightBackground': background,
      // 'editor.wordHighlightBorder': border,
      // 'editor.wordHighlightStrongBackground': background,
      // 'editor.wordHighlightStrongBorder': border,
      // 'editor.wordHighlightTextBackground': background,
      // 'editor.wordHighlightTextBorder': border,
      // 'editor.findMatchBackground': background2,
      // 'editor.findMatchHighlightBackground': background,
      'editor.findRangeHighlightBackground': background,
      'editor.findMatchBorder': border,
      // 'editor.findMatchHighlightBorder': colors.white,
      'editor.findRangeHighlightBorder': border,
      'search.resultsInfoForeground': foreground,
      // 'searchEditor.findMatchBackground':foreground,
      // 'searchEditor.findMatchBorder':foreground,
      // 'searchEditor.textInputBorder':foreground,
      // 'editor.hoverHighlightBackground':background,
      // 'editor.lineHighlightBackground':background,
      'editor.lineHighlightBorder': border,
      // 'editorUnicodeHighlight.border':background,
      // 'editorUnicodeHighlight.background':background,
      'editorLink.activeForeground': foreground2,
      // 'editor.rangeHighlightBackground':background,
      // 'editor.rangeHighlightBorder':background,
      'editor.symbolHighlightBackground': background2,
      'editor.symbolHighlightBorder': border,
      'editorWhitespace.foreground': foreground3,
      // 'editorIndentGuide.background': colors.lightpink,
      // 'editorIndentGuide.background1': background,
      // 'editorIndentGuide.background2': background,
      // 'editorIndentGuide.background3': colors.green,
      // 'editorIndentGuide.background4': colors.red,
      // 'editorIndentGuide.background5': colors.orange,
      // 'editorIndentGuide.background6': colors.blue,
      // 'editorIndentGuide.activeBackground': colors.lightpink,
      // 'editorIndentGuide.activeBackground1': background,
      // 'editorIndentGuide.activeBackground2': background,
      // 'editorIndentGuide.activeBackground3': colors.green,
      // 'editorIndentGuide.activeBackground4': colors.red,
      // 'editorIndentGuide.activeBackground5': colors.orange,
      // 'editorIndentGuide.activeBackground6': colors.blue,
      // 'editorInlayHint.background': background,
      // 'editorInlayHint.foreground': foreground,
      // 'editorInlayHint.typeForeground': background,
      // 'editorInlayHint.typeBackground': background,
      // 'editorInlayHint.parameterForeground': background,
      // 'editorInlayHint.parameterBackground': background,
      'editorRuler.foreground': foreground,
      'editor.linkedEditingBackground': background2,
      'editorCodeLens.foreground': foreground,
      'editorLightBulb.foreground': foreground,
      'editorLightBulbAutoFix.foreground': foreground,
      // 'editorBracketMatch.background':background,
      // 'editorBracketMatch.border':background,
      // 'editorBracketHighlight.foreground1': background,
      // 'editorBracketHighlight.foreground2': background,
      // 'editorBracketHighlight.foreground3': background,
      // 'editorBracketHighlight.foreground4': background,
      // 'editorBracketHighlight.foreground5': background,
      // 'editorBracketHighlight.foreground6': background,
      // 'editorBracketHighlight.unexpectedBracket.foreground': background,
      // 'editorBracketPairGuide.activeBackground1':background,
      // 'editorBracketPairGuide.activeBackground2':background,
      // 'editorBracketPairGuide.activeBackground3':background,
      // 'editorBracketPairGuide.activeBackground4':background,
      // 'editorBracketPairGuide.activeBackground5':background,
      // 'editorBracketPairGuide.activeBackground6':background,
      // 'editorBracketPairGuide.background1':background,
      // 'editorBracketPairGuide.background2':background,
      // 'editorBracketPairGuide.background3':background,
      // 'editorBracketPairGuide.background4':background,
      // 'editorBracketPairGuide.background5':background,
      // 'editorBracketPairGuide.background6':background,
      // 'editor.foldBackground':background,
      'editorOverviewRuler.background': background,
      'editorOverviewRuler.border': border,
      'editorOverviewRuler.findMatchForeground': foreground,
      // 'editorOverviewRuler.rangeHighlightForeground':background,
      // 'editorOverviewRuler.selectionHighlightForeground':background,
      // 'editorOverviewRuler.wordHighlightForeground':background,
      // 'editorOverviewRuler.wordHighlightStrongForeground':background,
      // 'editorOverviewRuler.wordHighlightTextForeground':background,
      // 'editorOverviewRuler.modifiedForeground':background,
      // 'editorOverviewRuler.addedForeground':background,
      // 'editorOverviewRuler.deletedForeground':background,
      // 'editorOverviewRuler.errorForeground':background,
      // 'editorOverviewRuler.warningForeground':background,
      // 'editorOverviewRuler.infoForeground':background,
      // 'editorOverviewRuler.bracketMatchForeground':background,
      // 'editorError.foreground':error,
      // 'editorError.border':error,
      // 'editorError.background':colors.white,
      // 'editorWarning.foreground':background,
      // 'editorWarning.border':background,
      // 'editorWarning.background':background,
      // 'editorInfo.foreground':background,
      // 'editorInfo.border':background,
      // 'editorInfo.background':background,
      // 'editorHint.foreground':background,
      // 'editorHint.border':border,
      // 'problemsErrorIcon.foreground':background,
      // 'problemsWarningIcon.foreground':background,
      // 'problemsInfoIcon.foreground':background,
      // 'editorUnnecessaryCode.border': background,
      // 'editorUnnecessaryCode.opacity': background,
      'editorGutter.background': background,
      'editorGutter.modifiedBackground': background3,
      // 'editorGutter.addedBackground':background,
      // 'editorGutter.deletedBackground':background,
      // 'editorGutter.commentRangeForeground':background,
      // 'editorGutter.commentGlyphForeground':background,
      // 'editorGutter.commentUnresolvedGlyphForeground':background,
      // 'editorGutter.foldingControlForeground':background,
      // 'editorCommentsWidget.resolvedBorder':background,
      // 'editorCommentsWidget.unresolvedBorder':background,
      // 'editorCommentsWidget.rangeBackground':background,
      // 'editorCommentsWidget.rangeActiveBackground':background,

      // Diff editor colors
      // 'diffEditor.insertedTextBackground': background2,
      'diffEditor.insertedTextBorder': border,
      // 'diffEditor.removedTextBackground': background2,
      'diffEditor.removedTextBorder': border,
      'diffEditor.border': border,
      // 'diffEditor.diagonalFill': background,
      // 'diffEditor.insertedLineBackground': background,
      // 'diffEditor.removedLineBackground': background,
      'diffEditorGutter.insertedLineBackground': background2,
      'diffEditorGutter.removedLineBackground': background2,
      // 'diffEditorOverview.insertedForeground': background2,
      // 'diffEditorOverview.removedForeground':background,
      'diffEditor.unchangedRegionBackground': background2,
      'diffEditor.unchangedRegionForeground': foreground,
      // 'diffEditor.unchangedCodeBackground': background,
      // 'diffEditor.move.border': background2,
      // 'diffEditor.moveActive.border':background,
      // 'multiDiffEditor.headerBackground': background2,
      // 'multiDiffEditor.background': background2,
      // 'multiDiffEditor.border': background2,

      // Chat colors
      // 'chat.requestBorder': background,
      // 'chat.slashCommandBackground': background,
      // 'chat.slashCommandForeground': background,

      // Inline Chat colors
      // 'inlineChat.background':background,
      // 'inlineChat.border':background,
      // 'inlineChat.shadow':background,
      // 'inlineChat.regionHighlight':background,
      // 'inlineChatInput.border':background,
      // 'inlineChatInput.focusBorder':background,
      // 'inlineChatInput.placeholderForeground':background,
      // 'inlineChatInput.background':background,
      // 'inlineChatDiff.inserted':background,
      // 'inlineChatDiff.removed':background,

      // Editor widget colors
      // 'editorWidget.foreground': foreground,
      // 'editorWidget.background': background,
      // 'editorWidget.border': border,
      // 'editorWidget.resizeBorder': border,
      // 'editorSuggestWidget.background': background,
      // 'editorSuggestWidget.border': background,
      // 'editorSuggestWidget.foreground': background,
      // 'editorSuggestWidget.focusHighlightForeground': background,
      // 'editorSuggestWidget.highlightForeground': background,
      // 'editorSuggestWidget.selectedBackground': background,
      // 'editorSuggestWidget.selectedForeground': background,
      // 'editorSuggestWidget.selectedIconForeground': background,
      // 'editorSuggestWidgetStatus.foreground': background,
      // 'editorHoverWidget.foreground': foreground,
      // 'editorHoverWidget.background': background,
      // 'editorHoverWidget.border': border,
      // 'editorHoverWidget.highlightForeground': background,
      // 'editorHoverWidget.statusBarBackground': background,
      // 'editorGhostText.border': background,
      // 'editorGhostText.background': background,
      // 'editorGhostText.foreground': background,
      // 'editorStickyScroll.background': background,
      // 'editorStickyScrollHover.background': background,
      // 'debugExceptionWidget.background': background,
      // 'debugExceptionWidget.border': background,
      // 'editorMarkerNavigation.background':background,
      // 'editorMarkerNavigationError.background':background,
      // 'editorMarkerNavigationWarning.background':background,
      // 'editorMarkerNavigationInfo.background':background,
      // 'editorMarkerNavigationError.headerBackground':background,
      // 'editorMarkerNavigationWarning.headerBackground':background,
      // 'editorMarkerNavigationInfo.headerBackground':background,

      // Peek view colors
      // 'peekView.border': background,
      // 'peekViewEditor.background': background,
      // 'peekViewEditorGutter.background': background,
      // 'peekViewEditor.matchHighlightBackground': background,
      // 'peekViewEditor.matchHighlightBorder': background,
      // 'peekViewResult.background': background,
      // 'peekViewResult.fileForeground': background,
      // 'peekViewResult.lineForeground': background,
      // 'peekViewResult.matchHighlightBackground': background,
      // 'peekViewResult.selectionBackground': background,
      // 'peekViewResult.selectionForeground': background,
      // 'peekViewTitle.background': background,
      // 'peekViewTitleDescription.foreground': background,
      // 'peekViewTitleLabel.foreground': background,
      // 'peekViewEditorStickyScroll.background': background,

      // Merge conflicts colors
      // 'merge.currentHeaderBackground': background,
      // 'merge.currentContentBackground': background,
      // 'merge.incomingHeaderBackground': background,
      // 'merge.incomingContentBackground': background,
      // 'merge.border': background,
      // 'merge.commonContentBackground': background,
      // 'merge.commonHeaderBackground': background,
      // 'editorOverviewRuler.currentContentForeground': background,
      // 'editorOverviewRuler.incomingContentForeground': background,
      // 'editorOverviewRuler.commonContentForeground': background,
      // 'editorOverviewRuler.commentForeground': background,
      // 'editorOverviewRuler.commentUnresolvedForeground': background,
      // 'mergeEditor.change.background': background,
      // 'mergeEditor.change.word.background': background,
      // 'mergeEditor.conflict.unhandledUnfocused.border': background,
      // 'mergeEditor.conflict.unhandledFocused.border': background,
      // 'mergeEditor.conflict.handledUnfocused.border': background,
      // 'mergeEditor.conflict.handledFocused.border': background,
      // 'mergeEditor.conflict.handled.minimapOverViewRuler': background,
      // 'mergeEditor.conflict.unhandled.minimapOverViewRuler': background,
      // 'mergeEditor.conflictingLines.background': background,
      // 'mergeEditor.changeBase.background': background,
      // 'mergeEditor.changeBase.word.background': background,
      // 'mergeEditor.conflict.input1.background': background,
      // 'mergeEditor.conflict.input2.background': background,

      // Panel colors
      'panel.background': background,
      'panel.border': border,
      'panel.dropBorder': border2,
      'panelTitle.activeBorder': border,
      'panelTitle.activeForeground': foreground,
      'panelTitle.inactiveForeground': foreground,
      'panelInput.border': border,
      // 'panelSection.border': error,
      // 'panelSection.dropBackground': background,
      // 'panelSectionHeader.background': background,
      // 'panelSectionHeader.foreground': background,
      // 'panelSectionHeader.border': background,

      // Status Bar colors
      'statusBar.background': background,
      'statusBar.foreground': foreground,
      'statusBar.border': border,
      'statusBar.debuggingBackground': background,
      'statusBar.debuggingForeground': foreground,
      'statusBar.debuggingBorder': border,
      'statusBar.noFolderForeground': foreground,
      'statusBar.noFolderBackground': background,
      'statusBar.noFolderBorder': border,
      // 'statusBarItem.activeBackground': background,
      // 'statusBarItem.hoverForeground': foreground,
      // 'statusBarItem.hoverBackground': background,
      // 'statusBarItem.prominentForeground': error,
      // 'statusBarItem.prominentBackground': background,
      // 'statusBarItem.prominentHoverForeground': background,
      // 'statusBarItem.prominentHoverBackground': background,
      // 'statusBarItem.remoteBackground': background,
      // 'statusBarItem.remoteForeground': background,
      // 'statusBarItem.remoteHoverBackground': background,
      // 'statusBarItem.remoteHoverForeground': background,
      // 'statusBarItem.errorBackground': background,
      // 'statusBarItem.errorForeground': error,
      // 'statusBarItem.errorHoverBackground': background,
      // 'statusBarItem.errorHoverForeground': background,
      // 'statusBarItem.warningBackground': background,
      // 'statusBarItem.warningForeground': background,
      // 'statusBarItem.warningHoverBackground': background,
      // 'statusBarItem.warningHoverForeground': background,
      // 'statusBarItem.compactHoverBackground': background,
      // 'statusBarItem.focusBorder': background,
      // 'statusBar.focusBorder': background,
      // 'statusBarItem.offlineBackground': background,
      // 'statusBarItem.offlineForeground': background,
      // 'statusBarItem.offlineHoverForeground': background,
      // 'statusBarItem.offlineHoverBackground': background,

      // Title Bar colors
      // 'titleBar.activeBackground': background,
      // 'titleBar.activeForeground': background,
      // 'titleBar.inactiveBackground': background,
      // 'titleBar.inactiveForeground': background,
      // 'titleBar.border': background,

      // Menu Bar colors
      // 'menubar.selectionForeground': background,
      // 'menubar.selectionBackground': background,
      // 'menubar.selectionBorder': background,
      // 'menu.foreground': background,
      // 'menu.background': background,
      // 'menu.selectionForeground': background,
      // 'menu.selectionBackground': background,
      // 'menu.selectionBorder': background,
      // 'menu.separatorBackground': background,
      // 'menu.border': background,

      // Command Center colors
      // 'commandCenter.foreground': background,
      // 'commandCenter.activeForeground': background,
      // 'commandCenter.background': background,
      // 'commandCenter.activeBackground': background,
      // 'commandCenter.border': background,
      // 'commandCenter.inactiveForeground': background,
      // 'commandCenter.inactiveBorder': background,
      // 'commandCenter.activeBorder': background,
      // 'commandCenter.debuggingBackground': background,

      // Notification colors
      'notificationCenter.border': border,
      'notificationCenterHeader.foreground': foreground,
      'notificationCenterHeader.background': background,
      'notificationToast.border': border,
      'notifications.foreground': foreground,
      'notifications.background': background,
      'notifications.border': border,
      // 'notificationLink.foreground': background,
      // 'notificationsErrorIcon.foreground': background,
      // 'notificationsWarningIcon.foreground': background,
      // 'notificationsInfoIcon.foreground': background,

      // Banner colors
      // 'banner.background': background,
      // 'banner.foreground': background,
      // 'banner.iconForeground': background,

      // Extensions colors
      'extensionButton.prominentForeground': foreground,
      // 'extensionButton.prominentBackground': background,
      'extensionButton.prominentHoverBackground': background,
      // 'extensionButton.background': background,
      'extensionButton.foreground': foreground,
      'extensionButton.hoverBackground': background,
      // 'extensionButton.separator': background,
      // 'extensionBadge.remoteBackground': background,
      // 'extensionBadge.remoteForeground': background,
      // 'extensionIcon.starForeground': background,
      // 'extensionIcon.verifiedForeground': background,
      // 'extensionIcon.preReleaseForeground': background,
      // 'extensionIcon.sponsorForeground': background,

      // Quick picker colors
      // 'pickerGroup.border': background,
      // 'pickerGroup.foreground': background,
      // 'quickInput.background': background,
      // 'quickInput.foreground': background,
      // 'quickInputList.focusBackground': background,
      // 'quickInputList.focusForeground': background,
      // 'quickInputList.focusIconForeground': background,
      // 'quickInputTitle.background': background,

      // Keybinding label colors
      'keybindingLabel.background': background,
      'keybindingLabel.foreground': foreground,
      'keybindingLabel.border': border,
      'keybindingLabel.bottomBorder': border,

      // Keyboard shortcut table colors
      'keybindingTable.headerBackground': background,
      'keybindingTable.rowsBackground': background,

      // Integrated Terminal colors
      'terminal.background': background,
      'terminal.border': border,
      'terminal.foreground': foreground,
      // 'terminal.ansiBlack': background,
      // 'terminal.ansiBlue': background,
      // 'terminal.ansiBrightBlack': background,
      // 'terminal.ansiBrightBlue': background,
      // 'terminal.ansiBrightCyan': background,
      // 'terminal.ansiBrightGreen': background,
      // 'terminal.ansiBrightMagenta': background,
      // 'terminal.ansiBrightRed': background,
      // 'terminal.ansiBrightWhite': background,
      // 'terminal.ansiBrightYellow': background,
      // 'terminal.ansiCyan': background,
      // 'terminal.ansiGreen': background,
      // 'terminal.ansiMagenta': background,
      // 'terminal.ansiRed': background,
      // 'terminal.ansiWhite': background,
      // 'terminal.ansiYellow': background,
      // 'terminal.selectionBackground': background,
      // 'terminal.selectionForeground': background,
      // 'terminal.inactiveSelectionBackground': background,
      'terminal.findMatchBackground': background,
      'terminal.findMatchBorder': border,
      // 'terminal.findMatchHighlightBackground': background,
      'terminal.findMatchHighlightBorder': border,
      // 'terminal.hoverHighlightBackground': background,
      'terminalCursor.background': background,
      'terminalCursor.foreground': foreground,
      // 'terminal.dropBackground': background,
      // 'terminal.tab.activeBorder': background,
      // 'terminalCommandDecoration.defaultBackground': background,
      // 'terminalCommandDecoration.successBackground': background,
      // 'terminalCommandDecoration.errorBackground': background,
      // 'terminalOverviewRuler.cursorForeground': background,
      // 'terminalOverviewRuler.findMatchForeground': background,

      // Debug colors
      'debugToolBar.background': background,
      'debugToolBar.border': border,
      'editor.stackFrameHighlightBackground': background2,
      'editor.focusedStackFrameHighlightBackground': background2,
      'editor.inlineValuesForeground': foreground,
      'editor.inlineValuesBackground': background2,
      // 'debugView.exceptionLabelForeground': background,
      // 'debugView.exceptionLabelBackground': background,
      'debugView.stateLabelForeground': foreground,
      'debugView.stateLabelBackground': background2,
      'debugView.valueChangedHighlight': highlight,
      'debugTokenExpression.name': highlight2,
      // 'debugTokenExpression.value': background,
      // 'debugTokenExpression.string': background,
      // 'debugTokenExpression.boolean': background,
      // 'debugTokenExpression.number': background,
      // 'debugTokenExpression.error': background,

      // Testing colors
      // 'testing.iconFailed': background,
      // 'testing.iconErrored': background,
      // 'testing.iconPassed': background,
      // 'testing.runAction': background,
      // 'testing.iconQueued': background,
      // 'testing.iconUnset': background,
      // 'testing.iconSkipped': background,
      // 'testing.peekBorder': background,
      // 'testing.peekHeaderBackground': background,
      // 'testing.message.error.decorationForeground': background,
      // 'testing.message.error.lineBackground': background,
      // 'testing.message.info.decorationForeground': background,
      // 'testing.message.info.lineBackground': background,

      // Welcome page colors
      // 'welcomePage.background': background,
      // 'welcomePage.progress.background': background,
      // 'welcomePage.progress.foreground': background,
      // 'welcomePage.tileBackground': background,
      // 'welcomePage.tileHoverBackground': background,
      // 'welcomePage.tileBorder': background,
      // 'walkThrough.embeddedEditorBackground': background,
      // 'walkthrough.stepTitle.foreground': background,

      // Git colors
      // 'gitDecoration.addedResourceForeground': background,
      // 'gitDecoration.modifiedResourceForeground': background,
      // 'gitDecoration.deletedResourceForeground': background,
      // 'gitDecoration.renamedResourceForeground': background,
      // 'gitDecoration.stageModifiedResourceForeground': background,
      // 'gitDecoration.stageDeletedResourceForeground': background,
      // 'gitDecoration.untrackedResourceForeground': background,
      // 'gitDecoration.ignoredResourceForeground': background,
      // 'gitDecoration.conflictingResourceForeground': background,
      // 'gitDecoration.submoduleResourceForeground': background,

      // Settings Editor colors
      // 'settings.headerForeground': background,
      // 'settings.modifiedItemIndicator': background,
      // 'settings.dropdownBackground': background,
      // 'settings.dropdownForeground': background,
      // 'settings.dropdownBorder': background,
      // 'settings.dropdownListBorder': background,
      // 'settings.checkboxBackground': background,
      // 'settings.checkboxForeground': background,
      // 'settings.checkboxBorder': background,
      // 'settings.rowHoverBackground': background,
      // 'settings.textInputBackground': background,
      // 'settings.textInputForeground': background,
      // 'settings.textInputBorder': background,
      // 'settings.numberInputBackground': background,
      // 'settings.numberInputForeground': background,
      // 'settings.numberInputBorder': background,
      // 'settings.focusedRowBackground': background,
      // 'settings.focusedRowBorder': background,
      // 'settings.headerBorder': background,
      // 'settings.sashBorder': background,
      // 'settings.settingsHeaderHoverForeground': background,

      // Breadcrumbs colors
      'breadcrumb.foreground': foreground,
      // 'breadcrumb.background': background,
      'breadcrumb.focusForeground': foreground,
      'breadcrumb.activeSelectionForeground': foreground,
      // 'breadcrumbPicker.background': background,

      // Snippets colors
      'editor.snippetTabstopHighlightBackground': background2,
      'editor.snippetTabstopHighlightBorder': border,
      // 'editor.snippetFinalTabstopHighlightBackground': background,
      // 'editor.snippetFinalTabstopHighlightBorder': border,

      // Symbol Icons colors
      // 'symbolIcon.arrayForeground': background,
      // 'symbolIcon.booleanForeground': background,
      // 'symbolIcon.classForeground': background,
      // 'symbolIcon.colorForeground': background,
      // 'symbolIcon.constantForeground': background,
      // 'symbolIcon.constructorForeground': background,
      // 'symbolIcon.enumeratorForeground': background,
      // 'symbolIcon.enumeratorMemberForeground': background,
      // 'symbolIcon.eventForeground': background,
      // 'symbolIcon.fieldForeground': background,
      // 'symbolIcon.fileForeground': background,
      // 'symbolIcon.folderForeground': background,
      // 'symbolIcon.functionForeground': background,
      // 'symbolIcon.interfaceForeground': background,
      // 'symbolIcon.keyForeground': background,
      // 'symbolIcon.keywordForeground': background,
      // 'symbolIcon.methodForeground': background,
      // 'symbolIcon.moduleForeground': background,
      // 'symbolIcon.namespaceForeground': background,
      // 'symbolIcon.nullForeground': background,
      // 'symbolIcon.numberForeground': background,
      // 'symbolIcon.objectForeground': background,
      // 'symbolIcon.operatorForeground': background,
      // 'symbolIcon.packageForeground': background,
      // 'symbolIcon.propertyForeground': background,
      // 'symbolIcon.referenceForeground': background,
      // 'symbolIcon.snippetForeground': background,
      // 'symbolIcon.stringForeground': background,
      // 'symbolIcon.structForeground': background,
      // 'symbolIcon.textForeground': background,
      // 'symbolIcon.typeParameterForeground': background,
      // 'symbolIcon.unitForeground': background,
      // 'symbolIcon.variableForeground': background,

      // Debug Icons colors
      // 'debugIcon.breakpointForeground': background,
      // 'debugIcon.breakpointDisabledForeground': background,
      // 'debugIcon.breakpointUnverifiedForeground': background,
      // 'debugIcon.breakpointCurrentStackframeForeground': background,
      // 'debugIcon.breakpointStackframeForeground': background,
      // 'debugIcon.startForeground': background,
      // 'debugIcon.pauseForeground': background,
      // 'debugIcon.stopForeground': background,
      // 'debugIcon.disconnectForeground': background,
      // 'debugIcon.restartForeground': background,
      // 'debugIcon.stepOverForeground': background,
      // 'debugIcon.stepIntoForeground': background,
      // 'debugIcon.stepOutForeground': background,
      // 'debugIcon.continueForeground': background,
      // 'debugIcon.stepBackForeground': background,
      // 'debugConsole.infoForeground': background,
      // 'debugConsole.warningForeground': background,
      // 'debugConsole.errorForeground': background,
      // 'debugConsole.sourceForeground': background,
      // 'debugConsoleInputIcon.foreground': background,

      // Notebook colors
      // 'notebook.editorBackground':background,
      // 'notebook.cellBorderColor':background,
      // 'notebook.cellHoverBackground':background,
      // 'notebook.cellInsertionIndicator':background,
      // 'notebook.cellStatusBarItemHoverBackground':background,
      // 'notebook.cellToolbarSeparator':background,
      // 'notebook.cellEditorBackground':background,
      // 'notebook.focusedCellBackground':background,
      // 'notebook.focusedCellBorder':background,
      // 'notebook.focusedEditorBorder':background,
      // 'notebook.inactiveFocusedCellBorder':background,
      // 'notebook.inactiveSelectedCellBorder':background,
      // 'notebook.outputContainerBackgroundColor':background,
      // 'notebook.outputContainerBorderColor':background,
      // 'notebook.selectedCellBackground':background,
      // 'notebook.selectedCellBorder':background,
      // 'notebook.symbolHighlightBackground':background,
      // 'notebookScrollbarSlider.activeBackground':background,
      // 'notebookScrollbarSlider.background':background,
      // 'notebookScrollbarSlider.hoverBackground':background,
      // 'notebookStatusErrorIcon.foreground':background,
      // 'notebookStatusRunningIcon.foreground':background,
      // 'notebookStatusSuccessIcon.foreground':background,
      // 'notebookEditorOverviewRuler.runningCellForeground':background,

      // Chart colors
      // 'charts.foreground': background,
      // 'charts.lines': background,
      // 'charts.red': background,
      // 'charts.blue': background,
      // 'charts.yellow': background,
      // 'charts.orange': background,
      // 'charts.green': background,
      // 'charts.purple': background,

      // Ports Colors
      // 'ports.iconRunningProcessForeground':background,

      // Comments View colors
      // 'commentsView.resolvedIcon': background,
      // 'commentsView.unresolvedIcon': background,

      // Action Bar colors
      'actionBar.toggledBackground': background2,

      // Simple Find Widget
      // 'simpleFindWidget.sashBorder':background,
    },
    tokenColors: getTokenColors(isColor),
  }
}
