import React from 'react'
import { useParams } from 'react-router'

const ArticleOne = () => {
    const params = useParams()
    console.log(params);
    return (<table class=" container">
        <thead>
            <tr>
                <td>Symbol</td>
                <td>Name</td>
                <td>How To Type</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>;</td>
                <td>Semi Colon</td>
                <td>حرف ك</td>
            </tr>
            <tr>
                <td>:</td>
                <td>Colon</td>
                <td>Shift + حرف ك</td>
            </tr>
            <tr>
                <td>/</td>
                <td>Slash</td>
                <td>حرف ظ</td>
            </tr>
            <tr>
                <td>\</td>
                <td>Back Slash</td>
                <td>فوق زر ال Enter</td>
            </tr>
            <tr>
                <td>|</td>
                <td>Pipe</td>
                <td>Shift + Back Slash</td>
            </tr>
            <tr>
                <td>&#10101;</td>
                <td>Curly Braces</td>
                <td>Shift + حرف ج</td>
            </tr>
            <tr>
                <td>&#10102;</td>
                <td>Curly Braces</td>
                <td>Shift + حرف د</td>
            </tr>
            <tr>
                <td>[</td>
                <td>Square Brackets</td>
                <td>حرف ج</td>
            </tr>
            <tr>
                <td>]</td>
                <td>Square Brackets</td>
                <td>حرف د</td>
            </tr>
            <tr>
                <td>`</td>
                <td>Backticks</td>
                <td>حرف ذ</td>
            </tr>
            <tr>
                <td>~</td>
                <td>Snake</td>
                <td>Shift + حرف ذ</td>
            </tr>
            <tr>
                <td>&#8216;</td>
                <td>Single Quotation</td>
                <td>حرف ط</td>
            </tr>
            <tr>
                <td>&#8220;</td>
                <td>Double Quotations</td>
                <td>Shift + حرف ط</td>
            </tr>
            <tr>
                <td>!</td>
                <td>Exclamation Mark</td>
                <td>Shift + رقم 1 في الأعلى</td>
            </tr>
            <tr>
                <td>#</td>
                <td>Hash</td>
                <td>Shift + رقم 3 في الأعلى</td>
            </tr>
            <tr>
                <td>$</td>
                <td>Dollar Sign</td>
                <td>Shift + رقم 4 في الأعلى</td>
            </tr>
            <tr>
                <td>%</td>
                <td>Percent</td>
                <td>Shift + رقم 5 في الأعلى</td>
            </tr>
            <tr>
                <td>^</td>
                <td>Caret</td>
                <td>Shift + رقم 6 في الأعلى</td>
            </tr>
            <tr>
                <td>&#038;</td>
                <td>Ampersand</td>
                <td>Shift + رقم 7 في الأعلى</td>
            </tr>
            <tr>
                <td>*</td>
                <td>Asterisk</td>
                <td>Shift + رقم 8 في الأعلى</td>
            </tr>
            <tr>
                <td>(</td>
                <td>Parentheses</td>
                <td>Shift + رقم 9 في الأعلى</td>
            </tr>
            <tr>
                <td>)</td>
                <td>Parentheses</td>
                <td>Shift + رقم 0 في الأعلى</td>
            </tr>
            <tr>
                <td>&lt;</td>
                <td>Less Than</td>
                <td>Shift + حرف و</td>
            </tr>
            <tr>
                <td>&gt;</td>
                <td>Greater Than</td>
                <td>Shift + حرف ز</td>
            </tr>
        </tbody>
    </table>
    )
}

export default ArticleOne