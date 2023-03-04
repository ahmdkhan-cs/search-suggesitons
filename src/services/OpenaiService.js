import { Configuration, OpenAIApi } from 'openai';

export async function getSuggestions(prompt){
    try{
        const configuration = new Configuration({
            apiKey: process.env.REACT_APP_OPENAI_API_KEY
        });
        const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            n: 10,
            temperature: 0.2
        });
        return response.data.choices;
    }catch(err){
        return err;
    }
}