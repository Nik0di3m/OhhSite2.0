import { TableContainer, TableTitle } from "./TableElements"

const Table = () => {
    return (
        <TableContainer>
            <TableTitle>
                Pozycjonowanie lokalne
            </TableTitle>
            <div className="divTable unstyledTable">
                <div className="divTableHeading">
                    <div className="divTableRow">
                        <div className="divTableHead">Pakiet/Usługi</div>
                        <div className="divTableHead">XS</div>
                        <div className="divTableHead">S</div>
                        <div className="divTableHead">M</div>
                        <div className="divTableHead">L</div>
                        <div className="divTableHead">XL</div>
                    </div>
                </div>
                <div className="divTableBody">
                    <div className="divTableRow">
                        <div className="divTableCell">Podstawowa optymalizacja strony www pod wyszukiwarki</div>
                        <div className="divTableCell">✔</div>
                        <div className="divTableCell">✔</div>
                        <div className="divTableCell">✔</div>
                        <div className="divTableCell">✔</div>
                        <div className="divTableCell">✔</div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell">Dobór słów kluczowych</div>
                        <div className="divTableCell">✔</div>
                        <div className="divTableCell">✔</div>
                        <div className="divTableCell">✔</div>
                        <div className="divTableCell">✔</div>
                        <div className="divTableCell">✔</div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell">Raport co miesiąc</div>
                        <div className="divTableCell">✔</div>
                        <div className="divTableCell">✔</div>
                        <div className="divTableCell">✔</div>
                        <div className="divTableCell">✔</div>
                        <div className="divTableCell">✔</div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell">Dodanie/optymalizacja wizytówki Google</div>
                        <div className="divTableCell">✔</div>
                        <div className="divTableCell">✔</div>
                        <div className="divTableCell">✔</div>
                        <div className="divTableCell">✔</div>
                        <div className="divTableCell">✔</div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell">Narzędzie do śledzenia pozycji</div>
                        <div className="divTableCell"></div>
                        <div className="divTableCell">✔</div>
                        <div className="divTableCell">✔</div>
                        <div className="divTableCell">✔</div>
                        <div className="divTableCell">✔</div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell">Wpisy na bloga</div>
                        <div className="divTableCell"></div>
                        <div className="divTableCell">1</div>
                        <div className="divTableCell">2</div>
                        <div className="divTableCell">4</div>
                        <div className="divTableCell">8</div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell">Promocja w mapach Google</div>
                        <div className="divTableCell"></div>
                        <div className="divTableCell">1</div>
                        <div className="divTableCell">2</div>
                        <div className="divTableCell">4</div>
                        <div className="divTableCell">8</div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell">Systematyczna optymalizacja firmowej strony www</div>
                        <div className="divTableCell"></div>
                        <div className="divTableCell"></div>
                        <div className="divTableCell"></div>
                        <div className="divTableCell">✔</div>
                        <div className="divTableCell">✔</div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell">Kompleksowe pozyskiwanie linków</div>
                        <div className="divTableCell">20</div>
                        <div className="divTableCell">40</div>
                        <div className="divTableCell">60</div>
                        <div className="divTableCell">90</div>
                        <div className="divTableCell">150</div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell">Analityka pozyskania i przepływu ruchu na stronie</div>
                        <div className="divTableCell"></div>
                        <div className="divTableCell"></div>
                        <div className="divTableCell"></div>
                        <div className="divTableCell">✔</div>
                        <div className="divTableCell">✔</div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell">Analiza konkurencji</div>
                        <div className="divTableCell"></div>
                        <div className="divTableCell"></div>
                        <div className="divTableCell"></div>
                        <div className="divTableCell"></div>
                        <div className="divTableCell">✔</div>
                    </div>
                </div>
                <div className="divTableFoot tableFootStyle">
                    <div className="divTableRow">
                        <div className="divTableCell">Cena na OhhSite (netto)</div>
                        <div className="divTableCell">499zł</div>
                        <div className="divTableCell">999zł</div>
                        <div className="divTableCell">1499zł</div>
                        <div className="divTableCell">1999zł</div>
                        <div className="divTableCell">2999zł</div>
                    </div>
                </div>
            </div>
        </TableContainer>
    )
}

export default Table
