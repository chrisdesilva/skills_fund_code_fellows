import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { UnmountClosed as Collapse } from 'react-collapse'
import { paymentTable } from '../constants/programInfo'

const LoanCalcPaymentTable = () => {

    const [partTime, togglePartTime] = useState(false)
    const [fullTime, toggleFullTime] = useState(false)

    return (
        <div className="flex flex-col items-center">
        {/* WEB TABLE */}
        <p onClick={() => toggleFullTime(!fullTime)} className="text-center text-primary cursor-pointer hidden lg:flex items-center">Full-Time Programs <FaAngleDown className="text-primary" /></p>
        <Collapse isOpened={fullTime}>
            <table className="hidden lg:block mb-0 pb-4 ">
                <tbody>
                    <tr>
                        {paymentTable.headers.map((header, i) => <th key={i} className="text-center">{header}</th>)}
                    </tr>
                        {paymentTable.data.map(data => {
                            return <tr key={data.name}>
                                <td className="text-center">{data.name}</td>
                                <td className="text-center">{data.tuition}</td>
                                <td className="text-center">{data.col}</td>
                                <td className="text-center">{data.max}</td>
                            </tr>
                        })}
                </tbody>
            </table>
        </Collapse>

        <p onClick={() => togglePartTime(!partTime)} className="text-center text-primary cursor-pointer hidden lg:flex items-center">Part-Time Programs <FaAngleDown className="text-primary" /></p>
        <Collapse isOpened={partTime}>
            <table className="hidden lg:flex justify-center mb-0 pb-4 ">
                <tbody>
                    <tr>
                        {paymentTable.headers2.map((header, i) => <th key={i} className="text-center">{header}</th>)}
                    </tr>
                        {paymentTable.data2.map(data => {
                            return <tr key={data.name}>
                                <td className="text-center">{data.name}</td>
                                <td className="text-center">{data.tuition}</td>
                                <td className="text-center">{data.col}</td>
                                <td className="text-center">{data.max}</td>
                            </tr>
                        })}
                </tbody>
            </table>
        </Collapse>

        {/* MOBILE TABLE */}
        <p onClick={() => toggleFullTime(!fullTime)} className="text-center text-primary cursor-pointer flex lg:hidden items-center">Full-Time Programs <FaAngleDown className="text-primary" /></p>
        <Collapse isOpened={fullTime}>
            <table className="lg:hidden mb-0 pb-4 ">
                <tbody>
                    {paymentTable.data.map((program, i) => {
                        return <React.Fragment key={i}>
                            <tr>
                                <th className="text-center bg-primary text-white rounded w-48">{program.name}</th>
                            </tr>
                            <tr>
                                <td className="text-center">Tuition: {program.tuition}</td>
                            </tr>
                            <tr>
                                <td className="text-center">Cost of Living: {program.col}</td>
                            </tr>
                            <tr>
                                <td className="text-center">Max Total: {program.max}</td>
                            </tr>
                        </React.Fragment>
                    })}
                </tbody>
            </table>
        </Collapse>
        
        <p onClick={() => togglePartTime(!partTime)} className="text-center text-primary cursor-pointer flex lg:hidden items-center">Part-Time Programs <FaAngleDown className="text-primary" /></p>
        <Collapse isOpened={partTime}>
            <table className="lg:hidden mb-0 pb-4 ">
                <tbody>
                    {paymentTable.data2.map((program, i) => {
                        return <React.Fragment key={i}>
                            <tr>
                                <th className="text-center bg-primary text-white rounded w-48">{program.name}</th>
                            </tr>
                            <tr>
                                <td className="text-center">Tuition: {program.tuition}</td>
                            </tr>
                        </React.Fragment>
                    })}
                </tbody>
            </table>
        </Collapse>
    </div>
    )
}

export default LoanCalcPaymentTable