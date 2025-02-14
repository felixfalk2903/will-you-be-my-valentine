"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No, but click this",
      "Babyyyyyyy?????",
      "Pwettty pleaseeeeee",
      "But i love you",
      "With a chocolate rice cake on top",
      "What about we get boba when you're back?",
      "Oke a massage then?",
      "still not? what about head?",
      "oke oke, what about i make you you're favorite ramen?",
      "What else could i do to convice you?????",
      "2 massages???? I can do that!",
      "pleaseeeeeeeeeeee babyyyyyy",
      ":((((",
      "Unlimited cuddlesssssssss, how does that sound?",
      "I'll carry you around like a princess!!! ahhh wait you dont like being carried nvm.",
      "What about i give you massage while you yap about your day?",

      "Okay, final offer: You win. Now let me love you!",
      "alright alright. You can click yes now.",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 831 509">
            <path
              className="heart heart--is-small"
              d="M444.44,386.14c1.63-56.83,22.45-110.89,42.05-120.77,19.6-9.88,44.18.53,40.96,36.43,28.54-14.75,68.81-13.58,72.18,16.2,2.82,24.86-27.91,34.7-62.9,37.01-34.98,2.31-67.64,12.11-92.3,31.13Z"
            />
            <path
              className="heart heart--is-large"
              d="M441,401.62c-10.03-35.56-29.5-70.5-43-113s-8.18-96.55,20-98c18.22-.94,27.5,15.4,30,42,51.67-71.77,131.93-55.64,145.5-33.5,22.26,36.34-23.06,66.74-59.5,85.5-54.49,28.06-75.94,72.67-93,117Z"
            />
            <path
              className="line"
              d="M53.5,319.12c104.85-75.98,214.82-13.62,266,17,49.53,29.64,72.22,56.76,92,50,30.52-10.43-48.19-89.59-55-141-4.55-34.38,12.5-57.5,41-54s34.96,28.4,32,63c13.71-42.57,60.57-69.96,88-68,33.48,2.39,46.34,37.12,0,68-59.6,39.72-81.13,107.21-80,126-23.44-57.19-32.08-99.35-6.5-114.5,32.51-19.25,63.84,2.79,55,41,22.64-35.77,51.42-38.85,65-25,18.95,19.33-2.51,41.08-33,53-26.82,10.49-46.45,19.63-59,34,48.29-70.94,94.69-86.65,172-93,65.87-5.41,112.71,26.72,187,17"
            />
          </svg>
          <div className="overlay"></div>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">
            WOOOOOO!!! I love you cutiepieeeee!! ;))
          </div>
          <div className="container">
            <div className="cbox">
              <div className="square shapes"></div>
              <div className="circle shapes c1"></div>
              <div className="circle shapes c2"></div>
            </div>
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
