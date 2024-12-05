
import ResultCardC from './Result_card'

export default function ResultRight() {

  const  arrowBreadcrumbicn = <svg className="h-3 w-3 text-gray-500" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="9 6 15 12 9 18" /></svg>

  return (
   <>
    <div className="w-full pt-3"> 
      <div className="w-full text-xl font-semibold px-5 py-2.5 border-gray-200 border-b-[1px]">
        <ul className="breadcrumb w-auto text-[11px] font-normal whitespace-nowrap inline-flex list-none items-center gap-1">
          <li> Home </li> {arrowBreadcrumbicn}
          <li> Shop </li> {arrowBreadcrumbicn}
          <li> Mobile </li>
        </ul>
      </div>
      <div className="w-full"> <ResultCardC/> </div>
    </div>
    
    <style>
        {`
            .breadcrumb li::after {@apply }
        `}
    </style>
   </>
  )
}
