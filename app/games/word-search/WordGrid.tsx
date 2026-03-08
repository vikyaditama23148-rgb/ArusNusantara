"use client";

type Props = {
  grid: string[][]
  onMouseDownCell: (row:number,col:number,letter:string)=>void
  onMouseEnterCell: (row:number,col:number,letter:string)=>void
  selectedCells: string[]
  foundCells: string[]
}

export default function WordGrid({
  grid,
  onMouseDownCell,
  onMouseEnterCell,
  selectedCells,
  foundCells
}: Props) {

  return (
    <div className="grid grid-cols-10 gap-2">

      {grid.map((row,rowIndex)=>
        row.map((letter,colIndex)=>{

          const key = `${rowIndex}-${colIndex}`
          const selected = selectedCells.includes(key)
          const found = foundCells.includes(key)

          return(

            <div
              key={key}
              onMouseDown={()=>onMouseDownCell(rowIndex,colIndex,letter)}
              onMouseEnter={()=>onMouseEnterCell(rowIndex,colIndex,letter)}
              className={`w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold cursor-pointer select-none transition

              ${
                found
                  ? "bg-green-600 text-white"
                  : selected
                  ? "bg-yellow-500 text-black"
                  : "bg-[#3c2a21] hover:bg-[#C9942A]"
              }

              `}
            >
              {letter}
            </div>

          )

        })
      )}

    </div>
  )
}