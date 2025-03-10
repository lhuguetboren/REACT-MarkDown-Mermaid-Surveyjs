import { Survey } from "survey-react-ui";
import { Model } from "survey-core";

type SurveyElement = {
  type: string;
  name: string;
  title: string;
  choices: { value: string; text: string }[];
  correctAnswer: string;
  isRequired: boolean;
};

type SurveysType = Record<number, { elements: SurveyElement[] }>;

export const surveys: SurveysType = {
  "1": {
    elements: [
      {
        type: "radiogroup",
        name: "pregunta1",
        title: "¿Cuál es tu lenguaje de programación favorito?",
        choices: [
          { value: "JavaScript", text: "JavaScript" },
          { value: "Python", text: "Python" },
          { value: "Java", text: "Java" },
          { value: "C#", text: "C#" }
        ],
        correctAnswer: "JavaScript",
        isRequired: true,
      },
    ],
  },
  "2": {
    elements: [
      {
        type: "radiogroup",
        name: "pregunta2",
        title: "¿Qué framework prefieres?",
        choices: [
          { value: "React", text: "React" },
          { value: "Vue", text: "Vue" },
          { value: "Angular", text: "Angular" },
          { value: "Svelte", text: "Svelte" }
        ],
        correctAnswer: "React",
        isRequired: true,
      },
    ],
  },
};



export const renderSurvey = (content: string | undefined, setSurveyResults: (text: string) => void) => {
  if (!content) return null; // Evita el error si content es undefined

  const surveyMatch = content.match(/```survey:(\d+)```/);
  if (surveyMatch) {
    const surveyId = parseInt(surveyMatch[1], 10);
    //const surveyId = surveyMatch[1];
    if (surveys[surveyId]) {
      const survey = new Model(surveys[surveyId]);
      survey.onComplete.add((sender) => {
        setSurveyResults(JSON.stringify(sender.data, null, 2));
      });
      return <Survey model={survey} />;
    }
  }
  return null;
};
