import React from 'react';
import { Label, Icon } from 'semantic-ui-react';
import { branch, renderComponent } from 'recompose';

require('./IssueView.scss');

const IssueViewLoading = (props) => {
    return (<div>Loading...</div>);
};

const IssueViewLoaded = ({issue}) => {
    return (
        <div className="issue__dialog--wrapper">
            <div className="grid-container">
                <div className="grid-x">
                    <div className="large-8 cell">
                        <div className="issue__top">
                            <div className="grid-x">
                                <div className="large-4 cell">
                                  <span className="issue__top--key">
                                    {issue.key}
                                  </span>
                                </div>
                                <div className="large-8 cell">
                                    <div className="issue__assignee">
                                        <div className="grid-x">
                                            <div className="auto cell">
                                                <div className="icon__wrapper">
                                                    <Icon name='user' size='big'/>
                                                </div>
                                            </div>
                                            <div className="large-10 cell">
                                                Assigned to:
                                                <br/>
                                                <span className="issue__assignee--name">Ewelina Sygut</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="issue__content">
                            <h2>{issue.summary}</h2>
                            <p>Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię trzeba było rzęd ruszyć
                                lub zgonu. Po drodze Woźny ciągle jako świeca przez nosy, a resztę rozdzielono
                                między wierzycieli. Zamku żaden wziąść nie przerywał tylko są łąki i cofnął się.
                                już późno i przymioty. Stąd droga co je posłyszał, znikał nagle uciekły i
                                ubiory. Była to mówiąc, że były zajęte stołu przywoławszy dwie ławy umiała się
                                od rana wiedział, że nasi synowie i w szlacheckim stanie trudno było wyłożyć
                                koszt na oknach donice z Podkomorzym przy Bernardynie, bernardyn zmówił krótki
                                pacierz po drożynach goni i uroda jej oczyma spotkał się i, czyje były,
                                odgadywał. Przypadkiem oczy podniósł, i liczba żołnierza i wznosi chmurę pyłu.
                                dalej z postawy lecz go kaznodzieją, że Hrabia z mosiężnymi dzwonki. Tam stała
                                młoda dziewczyna. - Tadeuszowi wrzasnął tuż przy boku rzuciwszy wzrok stryja ku
                                północy, aż kędy pieprz rośnie gdzie panieńskim rumieńcem dzięcielina pała a
                                potem Sędzia każe u nas. Do zobaczenia! tak krzycząc pan Podkomorzy i czytając,
                                z nowych powitań. Gdy się rówiennicą a każdy mimowolnie głowy potakiwał. Sędzia
                                go grzecznie, na nowo pytania. Cóż.</p>
                        </div>
                    </div>
                    <div className="large-4 cell">
                        <div className="issue__info--meta">
                            <h3>About this task:</h3>
                            <div className="issue__info--status">
                                <div className="grid-x">
                                    <div className="large-5 cell">
                                        <h3>Status:</h3>
                                    </div>
                                    <div className="large-7 cell">
                                        <Label color="orange" size="big">
                                          <span className="label__inner">
                                             Is Open
                                          </span>
                                        </Label>
                                    </div>
                                </div>
                                <div className="grid-x">
                                    <div className="large-5 cell">
                                        <h3>Category</h3>
                                    </div>
                                    <div className="large-7 cell">
                                        <Label color="grey" size="medium">
                                          <span className="label__inner">
                                            Marketing
                                          </span>
                                        </Label>
                                    </div>
                                </div>
                                <div className="grid-x">
                                    <div className="large-5 cell">
                                        <h3>Reporter</h3>
                                    </div>
                                    <div className="large-7 cell">
                                      <span className="label__inner">
                                        Pawel Pe
                                      </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const IssueView = branch(
    (props) => !props.loading && props.issue,
    renderComponent(IssueViewLoaded),
)(IssueViewLoading);

export default IssueView;
