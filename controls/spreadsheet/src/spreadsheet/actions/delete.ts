import { Spreadsheet } from '../base/index';
import { InsertDeleteEventArgs, beginAction, completeAction, skipHiddenIdx } from '../common/index';
import { deleteAction } from '../../workbook/common/index';

/**
 * The `Delete` module is used to delete cells, rows, columns and sheets from the spreadsheet.
 */
export class Delete {
    private parent: Spreadsheet;
    /**
     * Constructor for the Spreadsheet insert module.
     * @private
     */
    constructor(parent: Spreadsheet) {
        this.parent = parent;
        this.addEventListener();
    }
    private delete(args: InsertDeleteEventArgs): void {
        let isAction: boolean;
        if (args.isAction) { isAction = true; delete args.isAction; }
        if (isAction) { this.parent.notify(beginAction, { eventArgs: args, action: 'delete' }); }
        if (args.modelType === 'Sheet') {
            // Delete sheet code
        } else if (args.modelType === 'Row') {
            if (!this.parent.scrollSettings.enableVirtualization || args.startIndex <= this.parent.viewport.bottomIndex) {
                if (this.parent.scrollSettings.enableVirtualization) {
                    if (args.startIndex < this.parent.viewport.topIndex) { this.parent.viewport.topIndex -= args.model.length; }
                    this.parent.renderModule.refreshUI({ skipUpdateOnFirst: this.parent.viewport.topIndex === skipHiddenIdx(
                        this.parent.getActiveSheet(), 0, true), rowIndex: this.parent.viewport.topIndex, refresh: 'Row',
                        colIndex: this.parent.viewport.leftIndex });
                } else {
                    this.parent.renderModule.refreshUI({ skipUpdateOnFirst: true, refresh: 'Row', rowIndex: args.startIndex, colIndex: 0 });
                }
            }
            this.parent.selectRange(this.parent.getActiveSheet().selectedRange);
        } else {
            if (!this.parent.scrollSettings.enableVirtualization || args.startIndex <= this.parent.viewport.rightIndex) {
                if (this.parent.scrollSettings.enableVirtualization) {
                    if (args.startIndex < this.parent.viewport.leftIndex) { this.parent.viewport.leftIndex -= args.model.length; }
                    this.parent.renderModule.refreshUI({ skipUpdateOnFirst: this.parent.viewport.leftIndex === skipHiddenIdx(
                        this.parent.getActiveSheet(), 0, true, 'columns'), rowIndex: this.parent.viewport.topIndex, refresh: 'Column',
                        colIndex: this.parent.viewport.leftIndex });
                } else {
                    this.parent.renderModule.refreshUI({ skipUpdateOnFirst: true, refresh: 'Column', rowIndex: 0,
                        colIndex: args.startIndex });
                }
            }
            this.parent.selectRange(this.parent.getActiveSheet().selectedRange);
        }
        if (isAction) { this.parent.notify(completeAction, { eventArgs: args, action: 'delete' }); }
    }
    private addEventListener(): void {
        this.parent.on(deleteAction, this.delete, this);
    }
    /**
     * Destroy delete module.
     */
    public destroy(): void {
        this.removeEventListener();
        this.parent = null;
    }
    private removeEventListener(): void {
        if (!this.parent.isDestroyed) {
            this.parent.off(deleteAction, this.delete);
        }
    }
    /**
     * Get the delete module name.
     */
    public getModuleName(): string {
        return 'delete';
    }
}