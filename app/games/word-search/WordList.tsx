"use client";

type Props = {
  words: string[]
  foundWords: string[]
}

export default function WordList({ words, foundWords }: Props) {

  return (
    <div className="text-white">

      <h2 className="text-xl font-bold mb-4">
        Temukan Kata Budaya
      </h2>

      <ul className="space-y-2">

        {words.map((word, index) => {

          const found = foundWords.includes(word)

          return (
            <li
              key={index}
              className={`font-semibold tracking-wider

                ${
                  found
                    ? "text-green-400 line-through"
                    : "text-white"
                }

              `}
            >
              {word}
            </li>
          )

        })}

      </ul>

    </div>
  )
}