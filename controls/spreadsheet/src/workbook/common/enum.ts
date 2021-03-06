/**
 * Horizontal alignment type
 */
export type TextAlign = 'left' | 'center' | 'right';
/**
 * Vertical alignment type
 */
export type VerticalAlign = 'bottom' | 'middle' | 'top';
/**
 * Font weight type
 */
export type FontWeight = 'bold' | 'normal';
/**
 * Font style type
 */
export type FontStyle = 'italic' | 'normal';
/**
 * Text decoration type
 * @hidden
 */
export type TextDecoration = 'underline' | 'line-through' | 'underline line-through' | 'none';
/**
 * Font family type
 */
export type FontFamily = 'Arial' | 'Arial Black' | 'Axettac Demo' | 'Batang' | 'Book Antiqua' | 'Calibri' | 'Courier' | 'Courier New' |
    'Din Condensed' | 'Georgia' | 'Helvetica' | 'Helvetica New' | 'Roboto' | 'Tahoma' | 'Times New Roman' | 'Verdana';
/**
 * Specifies the number format types in Spreadsheet.
 */
export type NumberFormatType = 'General' | 'Number' | 'Currency' | 'Accounting' | 'ShortDate' | 'LongDate' | 'Time' | 'Percentage' |
    'Fraction' | 'Scientific' | 'Text';
/**
 * Specifies the option for save file type from Spreadsheet. By default, Excel save will be occur.
 */
export type SaveType = 'Xlsx' | 'Xls' | 'Csv';
/** 
 * Defines the order of Sorting. They are
 * * Ascending
 * * Descending 
 */
export type SortOrder =
    /**  Defines SortDirection as Ascending */
    'Ascending' |
    /**  Defines SortDirection as Descending */
    'Descending';
/**
 * Cell format type
 */
export type FormatType = 'CellFormat' | 'NumberFormat';
/**
 * Border type
 */
export type BorderType = 'Vertical' | 'Horizontal' | 'Outer' | 'Inner';

/**
 * Sheet visibility state
 */
export type SheetState =
    /** Defines the state of sheet as visible. */
    'Visible' |
    /** Defines the state of sheet as hidden. It can be unhidden later. */
    'Hidden' |
    /** Defines the state of sheet as hidden. Once set, it cannot be unhidden. */
    'VeryHidden';

/**
 * Workbook model type
 */
export type ModelType = 'Sheet' | 'Row' | 'Column';

/**
 * validation type
 */
export type ValidationType = 'WholeNumber' | 'Decimal' | 'Date' | 'TextLength' | 'List' | 'Time';

/**
 * validation operator
 */
export type ValidationOperator = 'Between' | 'NotBetween' | 'EqualTo' | 'NotEqualTo' | 'LessThan' |
'GreaterThan' | 'GreaterThanOrEqualTo' | 'LessThanOrEqualTo';

/**
 * Merge type
 */
export type MergeType =
    /** Merge all the cells between provided range. */
    'All' |
    /** Merge the cells row-wise. */
    'Horizontally' |
    /** Merge the cells column-wise. */
    'Vertically';
