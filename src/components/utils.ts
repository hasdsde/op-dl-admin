import {exportFile, useQuasar} from "quasar";
import {useRouter} from "vue-router";

const $q = useQuasar()
const rt = useRouter()

//判断是不是全是空的
export function allNull(item: any): boolean {
    return item == null || undefined || item == '';
}

//导出表格
export default function exportTable(columns: any, rows: any, fileName: string) {
    // naive encoding to csv format
    // @ts-ignore
    const content = [columns.map((col: any) => wrapCsvValue(col.label))].concat(
        rows.value.map((row: any) => columns.map((col: any) => wrapCsvValue(
            typeof col.field === 'function'
                ? col.field(row)
                : row[col.field === void 0 ? col.name : col.field],
            col.format,
            row
        )).join(','))
    ).join('\r\n')

    const status = exportFile(
        fileName + '.csv',
        content,
        {
            'mimeType': 'text/csv',
            'byteOrderMark': '\uFEFF',
            'encoding': 'utf-8'
        }
    )
    if (status !== true) {
        $q.notify({
            message: 'Browser denied file download...',
            color: 'negative',
            icon: 'warning'
        })
    }
}

//导出表格
function wrapCsvValue(val: any, formatFn: any, row: any) {
    let formatted = formatFn !== void 0
        ? formatFn(val, row)
        : val

    formatted = formatted === void 0 || formatted === null
        ? ''
        : String(formatted)

    formatted = formatted.split('"').join('""')
    /**
     * Excel accepts \n and \r in strings, but some other CSV parsers do not
     * Uncomment the next two lines to escape new lines
     */
    // .split('\n').join('\\n')
    // .split('\r').join('\\r')

    return `"${formatted}"`
}

//切割日期
export function sliceDateTime(time: string): string {
    time = time.slice(0, 19)
    return time.replace("T", ' ')
}

