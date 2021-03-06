import { highlightSearch, revertHighlightSearch } from '../../src/common/highlight-search';
import  {profile , inMB, getMemoryProfile} from './common.spec';
describe("highlightsearch", function () {
    beforeAll(() => {
        const isDef = (o: any) => o !== undefined && o !== null;
        if (!isDef(window.performance)) {
            console.log("Unsupported environment, window.performance.memory is unavailable");
            this.skip(); //Skips test (in Chai)
            return;
        }
    });

    it("highlight contents", function () {
        let divElement = document.createElement("div");
        divElement.setAttribute('id', 'listItems');
        let ulElement = document.createElement("ul");
        for (let i: number = 0; i < 2; i++) {
            let liElement = document.createElement("li");
            let text: string = i === 0 ? "java" : "ajax";
            let textNode1 = document.createTextNode(text);
            liElement.appendChild(textNode1);
            highlightSearch(liElement, "j", true);
            ulElement.appendChild(liElement);
        }
        divElement.appendChild(ulElement);
        document.body.appendChild(divElement);
        let id = "listItems";
        let query = "j";
        let li = document.getElementById(id).querySelectorAll("li");
        let element = document.getElementById(id).querySelector("span.e-highlight");
        let MarkElement = document.getElementById(id).querySelectorAll("span.e-highlight");
        expect(li.length).toBe(2);                                     //List Elements
        expect(element.textContent).toBe("j");                         //Element going to be highlighted.	
        expect(query.length).toBe(1);                                  //Input query
        expect(MarkElement.length).toBe(2);                            //Highlighted text , <mark> created
        expect(element).not.toBeNull();
        revertHighlightSearch(divElement);                                // <Span> is not Null                                             		  
        let spanEle = document.getElementById(id).querySelectorAll("span.e-highlight");
        expect(spanEle.length).toBe(0);  //Removing <Span> element.		
        highlightSearch(divElement, "", true);
        let elements = document.getElementById(id).querySelectorAll("span.e-highlight");
        expect(elements.length).toBe(0);
        highlightSearch(divElement, "J", false);
        let elements1 = document.getElementById(id).querySelectorAll("span.e-highlight");
        expect(elements1.length).toBe(0);
        highlightSearch(divElement, " ", false);
        let elements2 = document.getElementById(id).querySelectorAll("span.e-highlight");
        expect(elements1.length).toBe(0);
    });
    it('memory leak', () => {     
        profile.sample();
        let average: any = inMB(profile.averageChange)
        //Check average change in memory samples to not be over 10MB
        expect(average).toBeLessThan(10);
        let memory: any = inMB(getMemoryProfile())
        //Check the final memory usage against the first usage, there should be little change if everything was properly deallocated
        expect(memory).toBeLessThan(profile.samples[0] + 0.25);
    })
});






